import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Banner from '../components/Banner'
import FormHandler from '../components/FormHandler'
import FlightsFilter from '../components/FlightsFilter'
import FlightsList from '../components/FlightsList'

export default function FlightsContainer() {

    const [flightSchedules, setFlightSchedules] = useState([])
    const [storageData, setStorageData] = useState([])

    const data = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : {}
    let { tripDirection, origin, destination, departureDate, arrivalDate } = data

    departureDate = `${new Date(departureDate).getFullYear()}-${new Date(departureDate).getMonth() + 1}-${new Date(departureDate).getDate()}`

    tripDirection === 'roundTrip' ? arrivalDate = `${new Date(departureDate).getFullYear()}-${new Date(departureDate).getMonth() + 1}-${new Date(departureDate).getDate()}` : arrivalDate = ""

    const fetchFlights = async () => {
        let { data } = await axios.get(`/api/flights?origin=${origin}&destination=${destination}&departureDate=${departureDate}&arrivalDate=${arrivalDate}`)
        data = { ...data.data }
        data && setFlightSchedules(data)
        console.log(data)
    }
    useEffect(() => {
        data && setStorageData(data)
        data && fetchFlights()
    }, [])
    return (
        <div className="container-fluid">
            <Banner bannerStyle="home-banner">
                <FormHandler />
            </Banner>
            <section className="section clearfix">
                <div className="flights-sidebar-container">
                    <div className="sidebar-row">
                        <div className="side-bar-drawer">
                            <div className="sidebar-title">
                                <span className="close-sidebar">x</span>
                            </div>
                            <FlightsFilter
                                flightSchedules={flightSchedules}
                            />
                        </div>
                    </div>
                    <div className="modal-backdrop"></div>
                    <div className="main-content-row"></div>
                    <FlightsList
                        flightSchedules={flightSchedules}
                        storageData={storageData}
                    />
                </div>

            </section>

        </div>
    )
}
