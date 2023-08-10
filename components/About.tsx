import Image from 'next/image'
import React from 'react'
import imgAbout from '@img/about.jpg'
import { BiCheck } from 'react-icons/bi'
import AnimatedAOS from '@components/AnimatedAOS'

const About = () => {

    return (
        <AnimatedAOS className="" data-aos="fade-in" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out">
            <section id='About' className='w-full my-10 xl:px-5 xs:px-10'>
                <div className='w-full h-full grid lg:grid-cols-2 xs:grid-cols-1 grid-rows-1 xs:gap-y-10 '>
                    <div className='w-full h-full relative flex items-center justify-center overflow-hidden '>
                        <div className='w-[600px] h-full bg-green absolute z-[1] skew-x-5 top-0 -left-[300px] skew-x-[24deg]'></div>
                        <Image className='p-10 object-cover relative z-10' src={imgAbout} alt='about' />
                    </div>
                    <div className='h-full flex flex-col justify-center px-5 '>
                        <h1 className='lg:text-5xl md:text-4xl xs:text-3xl w-full font-bold mb-8'>#1 Place To Find The Perfect Property</h1>
                        <p className='text-stone-500 mb-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <ul>
                            <li className='flex mb-2 text-stone-500 mb-2'><BiCheck size={30} className='text-green mr-3' />Tempor erat elitr rebum at clita</li>
                            <li className='flex mb-2 text-stone-500 mb-2'><BiCheck size={30} className='text-green mr-3' />Clita duo justo magna dolore erat amet</li>
                            <li className='flex mb-2 text-stone-500 mb-2'><BiCheck size={30} className='text-green mr-3' />Aliqu diam amet diam et eos</li>
                        </ul>
                        <button className='button-green w-44 h-12'>Read More</button>
                    </div>

                </div>
            </section>
        </AnimatedAOS>
    )
}

export default About