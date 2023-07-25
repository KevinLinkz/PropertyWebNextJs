"use client";
import React, { useState } from 'react'
import PropertyListingDiv from './microComponents/PropertyListingDiv'

const datas = [
    {
        "id": 1,
        "price": 12345,
        "title": "Golden Urban House For Sell",
        "address": "123 Street,New York,USA",
        "area": 1000,
        "bed": 3,
        "bath": 2,
        "type": "For Sell",
        "typeBuilding": "Apartment",
        "img-url": "/property-1.jpg"
    },
    {
        "id": 2,
        "price": 12345,
        "title": "Golden Urban House For Sell",
        "address": "123 Street,New York,USA",
        "area": 1000,
        "bed": 3,
        "bath": 2,
        "type": "For Sell",
        "typeBuilding": "Villa",
        "img-url": "/property-2.jpg"
    },
    {
        "id": 3,
        "price": 12345,
        "title": "Golden Urban House For Sell",
        "address": "123 Street,New York,USA",
        "area": 1000,
        "bed": 3,
        "bath": 2,
        "type": "For Sell",
        "typeBuilding": "Office",
        "img-url": "/property-3.jpg"
    },
    {
        "id": 4,
        "price": 12345,
        "title": "Golden Urban House For Sell",
        "address": "123 Street,New York,USA",
        "area": 1000,
        "bed": 3,
        "bath": 2,
        "type": "For Sell",
        "typeBuilding": "Building",
        "img-url": "/property-4.jpg"
    },
    {
        "id": 5,
        "price": 12345,
        "title": "Golden Urban House For Sell",
        "address": "123 Street,New York,USA",
        "area": 1000,
        "bed": 3,
        "bath": 2,
        "type": "For Sell",
        "typeBuilding": "Home",
        "img-url": "/property-5.jpg"
    },
    {
        "id": 6,
        "price": 12345,
        "title": "Golden Urban House For Sell",
        "address": "123 Street,New York,USA",
        "area": 1000,
        "bed": 3,
        "bath": 2,
        "type": "For Sell",
        "typeBuilding": "Shop",
        "img-url": "/property-6.jpg"
    },
]

const PropertyListing = () => {
    const lstButton = ['Featured', 'For Sell', 'For Rent'];
    const [isButtonActive, setIsButtonActive] = useState(lstButton[0]);

    return (
        <section id='PropertyListing' className='w-full h-full px-5'>
            <h1 className='text-4xl font-bold mb-5'>Property Listing</h1>
            <div className='w-full h-full flex justify-around items-center mb-5'>
                <p className='w-[90%] text-stone-500'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
                <div className='w-full flex justify-end items-end'>
                    {
                        lstButton.map((text) => {
                            return (
                                <button key={`button-${text}`} className={`button-property-listing ${isButtonActive === text ? 'active' : ''}`} onClick={() => { setIsButtonActive(text) }}>{text}</button>
                            )
                        })
                    }
                </div>
            </div>
            <div className='grid grid-rows-2 grid-cols-3 gap-7'>
                {
                    datas.map((data) => {
                        return (
                            <PropertyListingDiv key={`property-lists-${data.id}`} imgUrl={data["img-url"]} type={data.type} typeBuilding={data.typeBuilding} price={data.price} title={data.title} address={data.address} area={data.area} bed={data.bed} bath={data.bath} />
                        )
                    })
                }
            </div>
            <div className='w-full mt-8 mb-16 flex justify-center '>
                <button className='button-green w-64 h-14'>Browse More Property</button>
            </div>

        </section>
    )
}

export default PropertyListing