import React, { useRef } from 'react'
import Banner from '../components/Banner'
import PopularAirlines from '../components/PopularAirlines'
import Offers from '../components/Offers'
import PopularDestinations from '../components/PopularDestinations'
import FormHandler from '../components/FormHandler'
import Overlay from '../components/Overlay'
import RegisterForm from '../components/RegisterForm'

export default function Home({
    cities,
    airlines,
    modalOpen,
    setModalOpen }) {

    const containerRef = useRef()
    return (
        <div className="container-fluid">
            <Banner bannerStyle="home-banner">
                <FormHandler />
            </Banner>
            {modalOpen && <Overlay innerRef={containerRef} modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <section className="clearfix position-absolute signup-section" ref={containerRef}>
                    <RegisterForm />
                </section>
            </Overlay>}
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

