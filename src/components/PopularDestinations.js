import React from 'react'
import { Link } from 'react-router-dom';

import img1 from "../images/w1.jpg";
import img2 from "../images/w2.jpg";
import img3 from "../images/w3.jpg";
import img4 from "../images/p4.jpg";
import img5 from "../images/p2.jpg";
import Slider from './Slider';

export default function PopularDestinations() {
    const imgs = [
        img1, img2, img3, img4, img5,
    ]
    const featured = imgs.map((img, indx) => {
        return (
            <div className="child boxes" key={indx}>
                <h3>{`IMG${indx}`}</h3>
                <Link to={"/"}>
                    <img src={img} alt={indx} className="img" />
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
