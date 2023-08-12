"use client"
import React from 'react'
import Testimonials from '@components/Testimonials'
import BannerTemplate from '@components/BannerTemplate'
import Inquiry from '@components/Inquiry'
import ContactUs from '@components/ContactUs'
import { DataType } from '@interface/breadcrumb'
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
        "title": "TESTIMONIAL",
        "url": "/"
    },
]
const TestimonialPage = () => {
    return (
        <section id='Testimonial'>
            <BannerTemplate title="Testimonial" data={breadcrumb} />
            <Inquiry />
            <Testimonials />
        </section>
    )
}

export default TestimonialPage