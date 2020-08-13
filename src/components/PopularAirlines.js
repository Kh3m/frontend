import React from 'react'
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm'

import ethiopian from "../images/ethiopian.png";
import emirates from "../images/emirates.png";
import delta from "../images/delta.png";
import qatar from "../images/qatar.png";
import etihad from "../images/etihad.png";
import lufthanza from "../images/lufthanza.png";
import turkish from "../images/turkish.png";
import virginatlantic from "../images/virgin-atlantic.png";
import airpeace from "../images/airpeace.png";



export default function PopularAirlines() {
    return (
        <div className="row popular-airlines-row pop justify-content-between text-center">
            <div className="col-sm-12 col-md-7 boxes popular-airlines">
                <Link to="/">
                    <img src={ethiopian} alt="ethiopian" />
                </Link>
                <Link to="/">
                    <img src={qatar} alt="qatar" />
                </Link>
                <Link to="/">
                    <img src={airpeace} alt="airpeace" />
                </Link>
                <Link to="/">
                    <img src={delta} alt="delta" />
                </Link>
                <Link to="/">
                    <img src={etihad} alt="etihad" />
                </Link>
                <Link to="/">
                    <img src={turkish} alt="turkish" />
                </Link>
                <Link to="/">
                    <img src={lufthanza} alt="lufthanza" />
                </Link>
                <Link to="/">
                    {" "}
                    <img src={emirates} alt="emirates" />
                </Link>
                <Link to="/">
                    <img src={virginatlantic} alt="virgin" />
                </Link>
            </div>
            <div className="col-sm col-md signup">
                <RegisterForm />
            </div>
        </div>
    )
}
