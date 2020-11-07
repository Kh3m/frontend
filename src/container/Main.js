import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import Home from '../pages/Home'
import Flights from '../pages/Flights';
import Information from '../pages/Information';
import FeaturedAirlines from '../pages/FeaturedAirlines';
import FeaturedDestination from '../pages/FeaturedDestination';
import { fetchCities } from '../redux/actionCreators/CitiesActionCreators'


function Main({ modalOpen, setModalOpen, userInfo, userReg }) {
  /*********************************************STATE */
  const [airlines, setAirlines] = useState([])
  const dispatch = useDispatch()
  const data = useSelector(state => state.cities)
  const { cities, isloading, errMess } = data


  /*********************************************CUSEEFFECT */
  useEffect(() => {
    dispatch(fetchCities())

    const fetchAirlines = async () => {
      const { data } = await axios.get("/api/airlines");
      setAirlines(data)
    }
    fetchAirlines();
  }, [])


  /************************************************Return */

  return (
    isloading ? <div>loading...</div> :
      errMess ? <div>{errMess}</div> :
        <>
          <main className="main">
            <Switch>
              <Route exact={true} path="/"
                render={props => (<Home {...props}
                  cities={cities}
                  airlines={airlines}
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
                  userInfo={userInfo}
                  userReg={userReg} />)}
              />
              <Route exact={true} path="/profile"
                render={props => (<Home {...props}
                  cities={cities}
                  airlines={airlines}
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen} />)}
              />

              <Route exact={true} path="/flights/:slug"
                render={props => (<Flights {...props}
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
                />)}
              />

              <Route exact={true} path="/information"
                render={props => (<Information {...props}
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen} />)}
              />

              <Route exact={true} path="/airlines/:slug"
                render={props => (<FeaturedAirlines {...props}
                  airlines={airlines}
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen} />)}
              />

              <Route exact={true} path="/destination/:slug"
                render={props => (<FeaturedDestination {...props}
                  cities={cities}
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen} />)}
              />
              <Route component={Error} />
            </Switch>
          </main>

        </>
  )
}

export default withRouter(Main)