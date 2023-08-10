"use client"
import React from 'react'
import Inquiry from '@components/Inquiry'
import BannerTemplate from '@components/BannerTemplate'
import ContactUsPage from '@components/ContactUsPage'
import AOS from 'aos';
import 'animate.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { DataType } from '@interface/breadcrumb'

const contact = () => {
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
            "title": "CONTACT US",
            "url": "/"
        },
    ]
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section id='About'>
            <BannerTemplate title="Contact Us" data={breadcrumb} />
            <Inquiry />
            <ContactUsPage />
        </section>
    )
}

export default contact