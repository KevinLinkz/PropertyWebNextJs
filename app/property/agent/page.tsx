"use client"
import React from 'react'
import PropertyAgents from '@components/PropertyAgents'
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
        "title": "PROPERTY AGENTS",
        "url": "/"
    },
]

const AgentPage = () => {
    return (
        <section id='PropertyAgent'>
            <BannerTemplate title="Property Agents" data={breadcrumb} />
            <Inquiry />
            <PropertyAgents />
            <ContactUs />
        </section>
    )
}

export default AgentPage