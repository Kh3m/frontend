import React from 'react'
import SearchForm from '../components/SearchForm'
import Banner from '../components/Banner'
import PopularAirlines from '../components/PopularAirlines'
import Offers from '../components/Offers'
import PopularDestinations from '../components/PopularDestinations'

export default function Home({ data, handleChange, handleDatePicker, cities, airlines }) {
    return (
        <div className="container-fluid">
            <Banner bannerStyle="home-banner">
                <SearchForm data={data}
                    handleChange={handleChange}
                    handleDatePicker={handleDatePicker} />
            </Banner>
            <section className="section clearfix">
                <PopularAirlines
                    airlines={airlines} />
            </section>
            <section className="offers-section section clearfix">
                <Offers />
            </section>
            <section className="popular-cities section clearfix">
                <PopularDestinations
                    cities={cities} />
            </section>
        </div>

    )
}

