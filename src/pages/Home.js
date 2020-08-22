import React from 'react'
import SearchForm from '../components/SearchForm'
import Banner from '../components/Banner'
import PopularAirlines from '../components/PopularAirlines'
import Offers from '../components/Offers'
import PopularDestinations from '../components/PopularDestinations'

export default function Home({
    data,
    handleDatePicker,
    handleChange,
    suggestions,
    suggestionOnSelect,
    inputOrigin,
    inputDestination,
    visibleOrigin,
    visibleDestination,
    handleSubmit,
    loading, cities, airlines }) {
    return (
        <div className="container-fluid">
            <Banner bannerStyle="home-banner">
                <SearchForm
                    data={data}
                    handleChange={handleChange}
                    handleDatePicker={handleDatePicker}
                    suggestions={suggestions}
                    suggestionOnSelect={suggestionOnSelect}
                    inputOrigin={inputOrigin}
                    inputDestination={inputDestination}
                    loading={loading}
                    visibleOrigin={visibleOrigin}
                    visibleDestination={visibleDestination}
                    handleSubmit={handleSubmit}
                />
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

