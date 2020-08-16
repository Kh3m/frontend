import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm'
import axios from 'axios'


export default function PopularAirlines() {

    const [airlines, setAirlines] = useState([]);

    useEffect(() => {
        const fetchAirlines = async () => {
            const { data } = await axios.get("/api/airlines");
            setAirlines(data)
        }
        fetchAirlines();
    }, [])
    const popularAirlines = airlines.map((airline, indx) => {
        return (
            <Link to={`/airlines/${airline.name}`} key={indx}>
                <img src={airline.logo.url} alt={`${airline.name}`} />
            </Link>
        )
    })

    return (
        <div className="row popular-airlines-row pop">
            <div className="col-sm-12 col-md-7 boxes popular-airlines">
                {popularAirlines}
            </div>
            <div className="col-sm col-md signup">
                <RegisterForm />
            </div>
        </div>
    )
}
