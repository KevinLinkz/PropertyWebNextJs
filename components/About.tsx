import Image from 'next/image'
import React from 'react'
import imgAbout from '@img/about.jpg'
import { BiCheck } from 'react-icons/bi'

const About = () => {
    return (
        <section id='About' className='w-full h-[700px] mb-20'>
            <div className='w-full h-full grid grid-cols-2 grid-rows-1 p-5'>
                <div className='w-full h-full relative flex items-center justify-center overflow-hidden '>
                    <div className='w-full h-full pl-5 bg-green absolute z-[1] skew-x-5 top-0 -left-96 skew-x-[24deg]'></div>
                    <Image className='w-[95%] h-[85%] pl-10 object-fit relative z-10' src={imgAbout} alt='about' />
                </div>
                <div className='h-full flex flex-col justify-center px-5 '>
                    <h1 className='text-4xl font-bold mb-8'>#1 Place To Find The Perfect Property</h1>
                    <p className='text-stone-500 mb-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <ul>
                        <li className='flex mb-2 text-stone-500 mb-2'><BiCheck size={30} className='text-green mr-3' />Tempor erat elitr rebum at clita</li>
                        <li className='flex mb-2 text-stone-500 mb-2'><BiCheck size={30} className='text-green mr-3' />Clita duo justo magna dolore erat amet</li>
                        <li className='flex mb-2 text-stone-500 mb-2'><BiCheck size={30} className='text-green mr-3' />Aliqu diam amet diam et eos</li>
                    </ul>
                    <button className='button-green w-52 h-12'>Read More</button>
                </div>

            </div>
        </section>
    )
}

export default About