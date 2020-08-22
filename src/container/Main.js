import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import SearchForm from '../components/SearchForm'

import Home from '../pages/Home'
import Flights from '../pages/Flights';
import Information from '../pages/Information';
import FeaturedAirlines from '../pages/FeaturedAirlines';
import FeaturedDestination from '../pages/FeaturedDestination';


class Main extends Component {
  constructor(props) {
    super(props);

    /*********************************************STATE */
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
      cities: [],
      airlines: [],
      suggestions: [],
      inputOrigin: false,
      inputDestination: false,
      visibleOrigin: "",
      visibleDestination: "",
      loading: true,
    };
  }

  /*********************************************COMPONENTDIDMOUNT */
  componentDidMount() {
    const fetchCities = async () => {
      const { data } = await axios.get("/api/cities");
      this.setState({
        cities: data
      })

    }
    const fetchAirlines = async () => {
      const { data } = await axios.get("/api/airlines");
      this.setState({
        airlines: data
      })

    }
    fetchCities();
    fetchAirlines();
  }

  /*********************************************HANDLEDATEPICKER */
  handleDatePicker = (date, name) => {
    this.setState({ data: { ...this.state.data, [name]: date } });
  }

  /*********************************************HANDLECHANGE */

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
      console.log(this.state.data.adults + this.state.data.children + this.state.data.infants)
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
    e.preventDefault()
    const data = this.state.data
    localStorage.setItem("data", JSON.stringify(data))
    let query = Object.keys(data).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    }).join('&');
    if (query) {
      this.props.history.push(`/flights/${query}`);

    }
  };

  /*****************************************************************RENDER */
  render() {




    /************************************************Return */
    return (
      <>
        <main className="main">
          <Switch>
            <Route exact={true} path="/"
              render={props => (<Home {...props}
                cities={this.state.cities}
                airlines={this.state.airlines}
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
              />)} />

            <Route exact={true} path="/flights/:slug"
              render={props => (<Flights {...props}
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
              />)} />

            <Route exact={true} path="/information/"
              render={props => (<Information {...props} />)} />

            <Route exact={true} path="/airlines/:slug"
              render={props => (<FeaturedAirlines {...props}
                airlines={this.state.airlines} />)}
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
              handleSubmit={this.handleSubmit} />

            <Route exact={true} path="/destination/:slug"
              render={props => (<FeaturedDestination {...props}
                cities={this.state.cities}
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
              />)} />

            <Route component={Error} />
          </Switch>
        </main>

      </>
    )
  }
}



export default withRouter(Main)