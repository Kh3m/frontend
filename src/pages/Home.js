import React from 'react'
import SearchForm from '../components/SearchForm'
import Banner from '../components/Banner'

export default function Home() {
    return (
        <div className="container-fluid">
            <Banner bannerStyle="home-banner">
                <SearchForm />
            </Banner>
        </div>

    )
}

