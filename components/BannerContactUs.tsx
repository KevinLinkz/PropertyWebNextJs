import Image from 'next/image'
import React from 'react'
import img1 from '@img/carousel-1.jpg'
import Link from 'next/link'


const BannerAbout = () => {
    return (
        <section id='Banner' className='w-full lg:mt-[-100px]  xs:mb-[40px]  lg:mb-[0px]'>
            <div className='w-full lg:h-[450px] xs:h-full grid md:grid-cols-2 xs:grid-cols-1 grid-rows-1 relative'>
                <div className='w-full h-full flex flex-col justify-center px-10 md:order-first xs:order-last xs:mt-7'>
                    <h1 className=' w-full lg:text-[46px] xs:text-[39px] font-bold leading-tight'>Contact Us</h1>
                    <ul className='flex my-6 font-normal text-stone-500 gap-2 '>
                        <li><Link href={''} className='text-green hover:text-green-hover cursor-pointer'>HOME</Link></li>
                        <li className="before:content-['/'] before:mr-2 before:text-gray-300 text-green hover:text-green-hover cursor-pointer">PAGES</li>
                        <li className="before:content-['/'] before:mr-2 before:text-gray-300 ">CONTACT</li>
                    </ul>
                </div>
                <div className='w-full h-full md:order-last xs:order-first'>
                    <Image className='h-full' src={img1} alt='About' />
                </div>

            </div>
        </section >
    )
}

export default BannerAbout