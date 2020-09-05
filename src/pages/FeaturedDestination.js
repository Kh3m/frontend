import React from 'react'
import Banner from '../components/Banner'
import { useParams } from 'react-router-dom'
import FormHandler from '../components/FormHandler'


export default function FeaturedDestination({ cities }) {
    const { slug } = useParams()
    const city = { ...cities.find(x => x.name === slug) }
    const { extras } = city

    return (
        <div className="container-fluid">
            <Banner bannerStyle="home-banner dest-banner">
                <FormHandler />
            </Banner>
            <div className="container featured-city">

                <div className="row city-row">
                    <div className="col-12 col-lg-4 boxes img-row">
                        <img src={city.img} alt={city.name} />
                    </div>
                    <div className="col-12 col-lg-7 boxes">
                        <h3>{city.name}</h3>
                        <p>{city.description}</p>
                    </div>
                    <div className="clearfix" />
                </div>
                <div className="row featured-facts boxes" >
                    <h4>Here are some interesting facts about {city.name}</h4>
                    <article className="desc">
                        <ul>
                            {extras && extras.map((listItem, index) => {
                                return <li key={index}>{listItem}</li>
                            })}
                        </ul>
                    </article>
                </div>

            </div>
        </div>

    )
}

