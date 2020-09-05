import React, { Component } from 'react'
import axios from 'axios'
import SearchForm from './SearchForm'
import { withRouter } from 'react-router-dom'


class FormHandler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                tripDirection: "roundTrip",
                origin: "",
                destination: "",
                departureDate: "",
                arrivalDate: "",
                adults: 1,
                children: 0,
                infants: 0,
                tripClass: "Economy"
            },
            suggestions: [],
            inputOrigin: false,
            inputDestination: false,
            visibleOrigin: "",
            visibleDestination: "",
            loading: true,

        }
    }
    /*********************************************HANDLEDATEPICKER */
    handleDatePicker = (date, name) => {
        this.setState({ data: { ...this.state.data, [name]: date } });
    }

    /*********************************************HANDLECHANGE */

    handlePassengerCount = (val, name, operator) => {
        const adultNum = this.state.data.adults
        const childrenNum = this.state.data.children
        const infantNum = this.state.data.infants
        if (operator === 'add') {
            val += 1
            this.setState({ data: { ...this.state.data, [name]: val } })
        } else if (operator === 'minus') {

            if (name === 'children' && adultNum > 1 && childrenNum > 0) {
                val -= 1
            }
            else if (name === 'infants' && adultNum > 1 && infantNum > 0) {
                val -= 1
            } else if (name === 'adults' && adultNum > 1) {
                val -= 1
            }
            this.setState({ data: { ...this.state.data, [name]: val } })
        }

    }


    handleChange = (e, name) => {
        if (name === 'tripDirection' || name === 'origin' || name === 'destination') {
            const value = e.target.value
            if (name === 'origin' || name === 'destination') {
                name === 'origin' ?
                    this.setState({
                        inputOrigin: true,
                        inputDestination: false,
                        visibleOrigin: value
                    }) :
                    this.setState({
                        inputDestination: true,
                        inputOrigin: false,
                        visibleDestination: value
                    })
                if (value.length > 0) {
                    this.setState({ loading: false, data: { ...this.state.data, [name]: value } })
                    this.autoCompleteSearch(value)
                } else {
                    this.setState({ loading: true, inputOrigin: false, inputDestination: false })
                }

            }
            this.setState({ data: { ...this.state.data, [name]: value } })
        } else {
            const value = e
            this.setState({ data: { ...this.state.data, [name]: value } })
        }
    }


    /************************************************AUTOCOMPLETE TRAVELPAYOUTS */
    autoCompleteSearch = (value) => {
        fetch(`http://autocomplete.travelpayouts.com/places2?term=${value}&locale=en&types[]=city&page[limit]=5`)
            .then(response => {
                if (response.ok)
                    return response
                else
                    console.log(`Looks like something went wrong. Status: ${response.status}`)
            })
            .then(response => response.json())
            .then(data => {
                this.setState({ suggestions: data })
            })
            .catch(error => {
                console.log(error)
            })
    }


    /************************************************SELECT SUGGESTION */
    suggestionOnSelect = (val, name, string) => {
        this.setState({
            data: { ...this.state.data, [name]: val },
            loading: true,

        })
        name === 'origin' && this.setState({ visibleOrigin: string })
        name === 'destination' && this.setState({ visibleDestination: string })
    }

    /*******************************************************HANDLE SUBMIT */
    handleSubmit = (e) => {
        const data = this.state.data
        localStorage.setItem("data", JSON.stringify(data))
        let query = Object.keys(data).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        }).join('&');
        if (query) {
            this.props.history.push(`/flights/${query}`);

        }
    };

    render() {
        return (
            <SearchForm
                data={this.state.data}
                handleChange={this.handleChange}
                handleDatePicker={this.handleDatePicker}
                suggestions={this.state.suggestions}
                suggestionOnSelect={this.suggestionOnSelect}
                inputOrigin={this.state.inputOrigin}
                inputDestination={this.state.inputDestination}
                loading={this.state.loading}
                visibleOrigin={this.state.visibleOrigin}
                visibleDestination={this.state.visibleDestination}
                handleSubmit={this.handleSubmit}
                handlePassengerCount={this.handlePassengerCount}
            />
        )
    }
}
export default withRouter(FormHandler)