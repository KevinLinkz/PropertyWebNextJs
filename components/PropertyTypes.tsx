import Image from 'next/image'
import React from 'react'
import imgApartment from '@img/icon-apartment.png'

const PropertyTypes = () => {
    return (
        <section id='PropertyTypes' className='w-full h-full border border-sky-500 flex flex-col justify-center items-center py-20'>
            <h1 className='text-4xl font-bold my-5'>Property Types</h1>
            <p className='w-[45%] text-center text-stone-500 mb-12'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>

            <div className='bg-green-body p-4 rounded-lg w-[200px]'>
                <div className='border border-green border-dashed rounded-lg bg-white group hover:bg-green transition-color ease duration-300 flex justify-center items-center flex-col p-5 '>
                    <div className='rounded-full w-[80px] h-[80px] border border-green border-dashed bg-white flex justify-center items-center '>
                        <Image alt='apartment' src={imgApartment}></Image>
                    </div>
                    <h2 className='mt-3 font-bold group-hover:text-white'>Apartment</h2>
                    <span className='text-green mt-1 group-hover:text-white'>123 Properties</span>
                </div>
            </div>
        </section>
    )
}

export default PropertyTypes