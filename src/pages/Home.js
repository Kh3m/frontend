import React from 'react'
import SearchForm from '../components/SearchForm'
import Banner from '../components/Banner'

export default function Home() {
    return (
        <Banner banner="home-banner">
            <SearchForm />
        </Banner>
    )
}

