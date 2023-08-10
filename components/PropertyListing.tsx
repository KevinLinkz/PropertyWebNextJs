import React, { useState } from 'react'
import PropertyListingDiv from './microComponents/PropertyListingDiv'
import AnimatedAOS from '@components/AnimatedAOS'

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
        "img-url": "/img/property-1.jpg"
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
        "img-url": "/img/property-2.jpg"
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
        "img-url": "/img/property-3.jpg"
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
        "img-url": "/img/property-4.jpg"
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
        "img-url": "/img/property-5.jpg"
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
        "img-url": "/img/property-6.jpg"
    },
]

const PropertyListing = () => {
    const lstButton = ['Featured', 'For Sell', 'For Rent'];
    const [isButtonActive, setIsButtonActive] = useState(lstButton[0]);

    return (

        <section id='PropertyListing' className='w-full h-full my-10 xl:px-5 xs:px-10'>
            <div className='grid lg:grid-cols-2 xs:grid-cols-1 xs:gap-y-5 grid-rows-1 w-full mb-10'>
                <AnimatedAOS className="" data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <h1 className='sm:text-4xl xs:text-2xl font-bold mb-5'>Property Listing</h1>
                    <p className='lg:w-[90%] xs:w-full text-stone-500'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
                </AnimatedAOS>
                <AnimatedAOS className="w-full h-full flex justify-around items-end  mb-5" data-aos="fade-left" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out">

                    <div className='w-full flex lg:justify-end xs:justify-start items-end'>
                        {
                            lstButton.map((text) => {
                                return (
                                    <button key={`button-${text}`} className={`button-property-listing ${isButtonActive === text ? 'active' : ''}`} onClick={() => { setIsButtonActive(text) }}>{text}</button>
                                )
                            })
                        }
                    </div>

                </AnimatedAOS>

            </div>
            <div className='grid grid-rows-2 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-7'>
                {
                    datas.map((data) => {
                        return (
                            <PropertyListingDiv key={`property-lists-${data.id}`} id={data.id} imgUrl={data["img-url"]} type={data.type} typeBuilding={data.typeBuilding} price={data.price} title={data.title} address={data.address} area={data.area} bed={data.bed} bath={data.bath} />
                        )
                    })
                }
            </div>
            <AnimatedAOS className='w-full mt-8 mb-16 flex justify-center ' data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-delay="500" data-aos-easing="ease">
                <button className='button-green w-64 h-14'>Browse More Property</button>
            </AnimatedAOS>


        </section>

    )
}

export default PropertyListing