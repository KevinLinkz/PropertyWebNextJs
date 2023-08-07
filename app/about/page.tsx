"use client"
import React from 'react'
import BannerAbout from '@components/BannerAbout'
import Inquiry from '@components/Inquiry'
import About from '@components/About'
import ContactUs from '@components/ContactUs'
import PropertyAgents from '@components/PropertyAgents'
import AOS from 'aos';
import 'animate.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const about = () => {

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section id='About'>
            <BannerAbout />
            <Inquiry />
            <About />
            <ContactUs />
            <PropertyAgents />
        </section>
    )
}

export default about