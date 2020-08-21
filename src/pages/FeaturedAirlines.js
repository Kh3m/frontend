import React from 'react'
import SearchForm from '../components/SearchForm'
import Banner from '../components/Banner'
import { useParams } from 'react-router-dom'


export default function FeaturedAirlines({ data, handleChange, handleDatePicker, airlines }) {
    const { slug } = useParams()
    let airline = { ...airlines.find(x => x.name === slug) }
    airline = { ...airline, logo: { ...airline.logo } }
    // console.log(airline.logo.url)
    // const { logo: { url } } = airline
    const { url } = airline.logo
    console.log(url)
    return (
        <div className="container-fluid">
            <Banner bannerStyle="home-banner airline-banner">
                <SearchForm data={data}
                    handleChange={handleChange}
                    handleDatePicker={handleDatePicker} />
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

