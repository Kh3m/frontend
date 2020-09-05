import React from 'react'
import Banner from '../components/Banner'
import { useParams } from 'react-router-dom'
import FormHandler from '../components/FormHandler'


export default function FeaturedAirlines({ airlines }) {
    const { slug } = useParams()
    let airline = { ...airlines.find(x => x.name === slug) }
    airline = { ...airline, logo: { ...airline.logo } }
    const { url } = airline.logo
    console.log(url)
    return (
        <div className="container-fluid">
            <Banner bannerStyle="home-banner airline-banner">
                <FormHandler />
            </Banner>
            <div className="container featured-airline">

                <div className="row city-row">
                    <div className="col-12 boxes flex flex-nowrap">

                        {url && <img className="airline-logo" src={url} alt={airline.name} />}

                        <div>
                            <h3>{airline.name} Airline</h3>
                            <p>{airline.description}</p>
                        </div>

                    </div>
                    <div className="clearfix" />
                </div>
                <div className="row featured-facts boxes" >
                    <h4>Here are some interesting facts about {airline.name}</h4>
                    <article className="desc">

                    </article>
                </div>

            </div>
        </div>
    )
}

