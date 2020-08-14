import React from 'react'
import SearchForm from '../components/SearchForm'
import Banner from '../components/Banner'
import PopularAirlines from '../components/PopularAirlines'
import Offers from '../components/Offers'
import PopularDestinations from '../components/PopularDestinations'

export default function Home({ data, handleChange, handleDatePicker }) {
    return (
        <div className="container-fluid">
            <Banner bannerStyle="home-banner">
                <SearchForm data={data}
                    handleChange={handleChange}
                    handleDatePicker={handleDatePicker} />
            </Banner>
            <section className="section clearfix">
                <PopularAirlines />
            </section>
            <section className="section clearfix">
                <Offers />
            </section>
            <section className="section clearfix">
                <PopularDestinations />
            </section>
        </div>

    )
}

