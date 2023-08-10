"use client"
import React from 'react'
import PropertyTypes from '@components/PropertyTypes'
import BannerTemplate from '@components/BannerTemplate'
import Inquiry from '@components/Inquiry'
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
        "title": "PROPERTY TYPE",
        "url": "/"
    },
]
const type = () => {
    return (
        <section id='PropertyType'>
            <BannerTemplate title="Property Type" data={breadcrumb} />
            <Inquiry />
            <PropertyTypes />
        </section>
    )
}

export default type