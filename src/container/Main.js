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

    /*********************************************STATE */
    this.state = {
      cities: [],
      airlines: [],

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
                data={this.state.data} />)}
            />

            <Route exact={true} path="/flights/:slug"
              render={props => (<Flights {...props} />)}
            />

            <Route exact={true} path="/information/"
              render={props => (<Information {...props} />)}
            />

            <Route exact={true} path="/airlines/:slug"
              render={props => (<FeaturedAirlines {...props}
                airlines={this.state.airlines} />)}
            />

            <Route exact={true} path="/destination/:slug"
              render={props => (<FeaturedDestination {...props}
                cities={this.state.cities} />)}
            />

            <Route component={Error} />
          </Switch>
        </main>

      </>
    )
  }
}

export default withRouter(Main)