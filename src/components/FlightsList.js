import React, { useState, useEffect } from 'react'
import Accordion from './Accordion'

export default function FlightsList({ flightSchedules, storageData }) {


    const dest = { ...flightSchedules }
    console.log(typeof (dest))

    const results = Object.values(dest).map((match, i) => {
        const inner = Object.values(match).map((item, j) => {
            return (
                <div className="row" key={i}>
                    <Accordion
                        content={`
            <ul>
                      <li>Adults: ${storageData.adults}</li>
                      <li>Children: ${storageData.children}</li>
                      <li>Infants: ${storageData.infants}</li>
                    </ul>
            `}>
                        <ul>
                            <li><div>From: {storageData.origin}</div></li>
                            <li><div>To: {storageData.destination}</div></li>
                            <li className="accordMobile"><div>Airline: {item.airline} &nbsp;</div></li>
                            <li className="accordMobile"><div>Departure: {item.departure_at}</div></li>
                            <li className="accordMobile"><div>Return: {item.return_at}</div></li>
                            <li className="accordMobile"><div>Flight Number: {item.flight_number}</div></li>
                            <li className="accordMobile"><div>Price: ${item.price}.00</div></li>
                            <li className="accordMobile"><button type="submit" className="btn btn-primary">Select</button></li>
                        </ul>
                    </Accordion>
                </div>
            )
        })
        return inner


    })

    return (
        <div>
            {results}
        </div>
    )
}
