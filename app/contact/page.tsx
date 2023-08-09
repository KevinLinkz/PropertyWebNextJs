"use client"
import React from 'react'
import Inquiry from '@components/Inquiry'
import BannerContactUs from '@components/BannerContactUs'
import ContactUsPage from '@components/ContactUsPage'
import AOS from 'aos';
import 'animate.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const contact = () => {

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section id='About'>
            <BannerContactUs />
            <Inquiry />
            <ContactUsPage />
        </section>
    )
}

export default contact