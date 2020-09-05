import React from 'react'
import Banner from '../components/Banner'
import PopularAirlines from '../components/PopularAirlines'
import Offers from '../components/Offers'
import PopularDestinations from '../components/PopularDestinations'
import FormHandler from '../components/FormHandler'

export default function Home({
    cities,
    airlines }) {
    return (
        <div className="container-fluid">
            <Banner bannerStyle="home-banner">
                <FormHandler />
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

