import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm'



export default function PopularAirlines({ airlines }) {

    const userSignin = useSelector(state => state.userSignin)
    const userRegister = useSelector(state => state.userRegister)
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
