"use client"
import React from 'react'
import PropertyListing from '@components/PropertyListing'
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
        "title": "PROPERTY LIST",
        "url": "/"
    },
]

const ListPage = () => {
    return (
        <section id='PropertyList'>
            <BannerTemplate title="Property List" data={breadcrumb} />
            <Inquiry />
            <PropertyListing />
            <ContactUs />
        </section>
    )
}

export default ListPage