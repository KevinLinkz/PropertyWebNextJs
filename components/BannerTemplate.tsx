import Image from 'next/image'
import React from 'react'
import img1 from '@img/carousel-1.jpg'
import Link from 'next/link'
import { DataType } from '@interface/breadcrumb'


interface props {
    title: string;
    data: DataType[];
}

const BannerAbout = ({ title, data }: props) => {
    return (
        <section id='Banner' className='w-full lg:mt-[-100px]  xs:mb-[40px]  lg:mb-[0px]'>
            <div className='w-full lg:h-[450px] xs:h-full grid md:grid-cols-2 xs:grid-cols-1 grid-rows-1 relative'>
                <div className='w-full h-full flex flex-col justify-center px-10 md:order-first xs:order-last xs:mt-7'>
                    <h1 className=' w-full lg:text-[46px] xs:text-[39px] font-bold leading-tight'>{title}</h1>
                    <ul className='flex my-6 font-normal text-stone-500 gap-2 '>
                        {
                            data.map((value) => {
                                if (value.id !== 3) {
                                    return (
                                        <li key={value.id}><Link href={value.url} className='after:content-["/"] after:ml-2 after:text-gray-300 text-green hover:text-green-hover cursor-pointer'>{value.title}</Link></li>
                                    )
                                } else {
                                    return (
                                        <li key={value.id} className="hover:text-green-hover cursor-pointer">{value.title}</li>
                                    )
                                }
                            })
                        }
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