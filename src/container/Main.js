import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Flights from '../pages/Flights';
import Information from '../pages/Information';
import Airlines from '../pages/Airlines';
import PopularDestination from '../pages/PopularDestination';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    return (
      <main className="main">
        <Switch>
          <Route exact={true} path="/"
            render={props => (<Home {...props} />)} />

          <Route exact={true} path="/flights/"
            render={props => (<Home {...props} />)} />

          <Route exact={true} path="/flights/:slug"
            render={props => (<Flights {...props} />)} />

          <Route exact={true} path="/information/"
            render={props => (<Information {...props} />)} />

          <Route exact={true} path="/airlines/"
            render={props => (<Home {...props} />)} />

          <Route exact={true} path="/airlines/:slug"
            render={props => (<Airlines {...props} />)} />

          <Route exact={true} path="/destination/:slug"
            render={props => (<PopularDestination {...props} />)} />

          <Route component={Error} />
        </Switch>
      </main>

    )
  }
}
