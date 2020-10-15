import React, { useRef } from 'react'
import Banner from '../components/Banner'
import FormHandler from '../components/FormHandler'
import Overlay from '../components/Overlay'
import RegisterForm from '../components/RegisterForm'


export default function SignUp() {

    const containerRef = useRef()
    return (
        <div className="container-fluid position-relative">

            <Banner bannerStyle="home-banner airline-banner">
                <FormHandler />
            </Banner>
            <Overlay innerRef={containerRef}>
                <section className="clearfix position-absolute signup-section" ref={containerRef}>
                    <RegisterForm />
                </section>
            </Overlay>
        </div>
    )
}
