import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import Home from '../pages/Home'
import Flights from '../pages/Flights';
import Information from '../pages/Information';
import FeaturedAirlines from '../pages/FeaturedAirlines';
import FeaturedDestination from '../pages/FeaturedDestination';
import SignUp from '../pages/SignUp';


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
                data={this.state.data}
                modalOpen={this.props.modalOpen}
                setModalOpen={this.props.setModalOpen} />)}
            />

            <Route exact={true} path="/flights/:slug"
              render={props => (<Flights {...props}
                modalOpen={this.props.modalOpen}
                setModalOpen={this.props.setModalOpen}
              />)}
            />

            <Route exact={true} path="/information"
              render={props => (<Information {...props}
                modalOpen={this.props.modalOpen}
                setModalOpen={this.props.setModalOpen} />)}
            />

            <Route exact={true} path="/airlines/:slug"
              render={props => (<FeaturedAirlines {...props}
                airlines={this.state.airlines}
                modalOpen={this.props.modalOpen}
                setModalOpen={this.props.setModalOpen} />)}
            />

            <Route exact={true} path="/destination/:slug"
              render={props => (<FeaturedDestination {...props}
                cities={this.state.cities}
                modalOpen={this.props.modalOpen}
                setModalOpen={this.props.setModalOpen} />)}
            />
            <Route component={Error} />
          </Switch>
        </main>

      </>
    )
  }
}

export default withRouter(Main)