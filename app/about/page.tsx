"use client"
import React from 'react'
import BannerTemplate from '@components/BannerTemplate'
import Inquiry from '@components/Inquiry'
import About from '@components/About'
import ContactUs from '@components/ContactUs'
import PropertyAgents from '@components/PropertyAgents'
import AOS from 'aos';
import 'animate.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { DataType } from '@interface/breadcrumb'

const AboutPage = () => {
    const breadcrumb: DataType[] = [
        {
            "id": 1,
            "title": "HOME",
            "url": "/"
        },
        {
            "id": 2,
            "title": "PAGES",
            "url": "/"
        },
        {
            "id": 3,
            "title": "ABOUT",
            "url": "/"
        },
    ]

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section id='About'>
            <BannerTemplate title="About" data={breadcrumb} />
            <Inquiry />
            <About />
            <ContactUs />
            <PropertyAgents />
        </section>
    )
}

export default AboutPage