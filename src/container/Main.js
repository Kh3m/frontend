import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import Home from '../pages/Home'
import Flights from '../pages/Flights';
import Information from '../pages/Information';
import FeaturedAirlines from '../pages/FeaturedAirlines';
import FeaturedDestination from '../pages/FeaturedDestination';


class Main extends Component {
  constructor(props) {
    super(props);
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
    };
  }
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

  handleDatePicker = (date, name) => {
    this.setState({ data: { ...this.state.data, [name]: date } });
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ data: { ...this.state.data, [name]: value } })
  }
  render() {

    return (
      <main className="main">
        <Switch>
          <Route exact={true} path="/"
            render={props => (<Home {...props}
              data={this.state.data}
              handleChange={this.handleChange}
              handleDatePicker={this.handleDatePicker}
              cities={this.state.cities}
              airlines={this.state.airlines} />)} />

          <Route exact={true} path="/flights/"
            render={props => (<Home {...props}
              data={this.state.data}
              handleChange={this.handleChange}
              handleDatePicker={this.handleDatePicker} />)} />

          <Route exact={true} path="/flights/:slug"
            render={props => (<Flights {...props}
              data={this.state.data}
              handleChange={this.state.handleChange}
              handleDatePicker={this.handleDatePicker} />)} />

          <Route exact={true} path="/information/"
            render={props => (<Information {...props} />)} />

          <Route exact={true} path="/airlines/"
            render={props => (<Home {...props}
              data={this.state.data}
              handleChange={this.handleChange}
              handleDatePicker={this.handleDatePicker}
              cities={this.state.cities}
              airlines={this.state.airlines} />)} />

          <Route exact={true} path="/airlines/:slug"
            render={props => (<FeaturedAirlines {...props}
              data={this.state.data}
              handleChange={this.handleChange}
              handleDatePicker={this.handleDatePicker}
              airlines={this.state.airlines} />)} />

          <Route exact={true} path="/destination/:slug"
            render={props => (<FeaturedDestination {...props}
              data={this.state.data}
              handleChange={this.handleChange}
              handleDatePicker={this.handleDatePicker}
              cities={this.state.cities}
            />)} />

          <Route component={Error} />
        </Switch>
      </main>

    )
  }
}
export default withRouter(Main)