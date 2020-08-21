import React from 'react'
import SearchForm from '../components/SearchForm'
import Banner from '../components/Banner'
import { useParams } from 'react-router-dom'


export default function FeaturedDestination({ data, handleChange, handleDatePicker, cities }) {
    const { slug } = useParams()
    const city = { ...cities.find(x => x.name === slug) }
    const { extras } = city

    return (
        <div className="container-fluid">
            <Banner bannerStyle="home-banner dest-banner">
                <SearchForm data={data}
                    handleChange={handleChange}
                    handleDatePicker={handleDatePicker} />
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

