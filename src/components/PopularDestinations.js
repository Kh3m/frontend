import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

import Slider from './Slider';

export default function PopularDestinations() {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const fetchCities = async () => {
            const { data } = await axios.get("/api/cities");
            setCities(data)
        }
        fetchCities();
    }, [])
    console.log(cities)
    const featured = cities.map((city, indx) => {
        return (
            <div className="child boxes" key={indx}>
                <h3>{city.name}</h3>
                <h5>{city.slug}</h5>
                <Link to={"/"}>
                    <img src={city.img} alt={city.id} className="img" />
                </Link>
            </div>
        )
    })
    return (
        <Slider>
            {featured}
        </Slider>

    )
}
