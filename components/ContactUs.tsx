import Image from 'next/image'
import React from 'react'
import imgContactUs from '@img/call-to-action.jpg'
import { BsFillTelephoneFill, BsFillCalendarWeekFill } from 'react-icons/bs'
import AnimatedAOS from '@components/AnimatedAOS'

const ContactUs = () => {

    return (
        <AnimatedAOS className="" data-aos="fade-up" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out">
            <section id='ContactUs' className={`w-full h-full xl:px-5 xs:px-10`}>
                <div className='bg-green-body  my-2 px-4 py-4  rounded-md'>
                    <div className='w-full h-full border border-green border-dashed border-opacity-30 rounded-md bg-white'>
                        <div className='grid lg:grid-cols-2 xs:grid-cols-1  grid-rows-1 '>
                            <div className="mx-6 my-6">
                                <Image src={imgContactUs} className='object-cover rounded-md ' alt='Contact Us'></Image>
                            </div>
                            <div className='flex flex-col items-center justify-center px-6'>
                                <h1 className='font-bold lg:text-[42px] md:text-[35px] xs:text-[26px] md:leading-[50px] lg:mt-0 xs:mt-5'>Contact With Our Certified Agent</h1>
                                <p className='my-5'>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
                                <div className='w-full flex gap-4 sm:flex-row xs:flex-col lg:mb-0 xs:mb-5'>
                                    <button className='button-green flex items-center justify-center'><BsFillTelephoneFill size={17} className='mr-2' />Make A Call</button>
                                    <button className='bg-darkblue hover:bg-darkblue-hover ease-in-out duration-300 text-white px-7 py-4 rounded-md  flex items-center justify-center'><BsFillCalendarWeekFill size={17} className='mr-2' /> Get Appointment</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedAOS>

    )
}

export default ContactUs