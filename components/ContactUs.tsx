import Image from 'next/image'
import React from 'react'
import imgContactUs from '@img/call-to-action.jpg'
import { BsFillTelephoneFill, BsFillCalendarWeekFill } from 'react-icons/bs'

const ContactUs = () => {
    return (
        <section id='Section' className='w-full h-full'>
            <div className='bg-green-body mx-5 my-2 px-4 py-4  rounded-md'>
                <div className='w-full h-full border border-green border-dashed rounded-md bg-white'>
                    <div className='grid grid-cols-2 grid-rows-1 '>
                        <div className="mx-6 my-6">
                            <Image src={imgContactUs} className='object-cover rounded-md ' alt='Contact Us'></Image>
                        </div>
                        <div className='flex flex-col items-center justify-center px-6'>
                            <h1 className='font-bold text-[42px] leading-[50px]'>Contact With Our Certified Agent</h1>
                            <p className='my-5'>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
                            <div className='w-full flex gap-4'>
                                <button className='button-green flex items-center justify-center'><BsFillTelephoneFill size={17} className='mr-2' />Make A Call</button>
                                <button className='bg-darkblue hover:bg-darkblue-hover ease-in-out duration-300 text-white px-7 py-4 rounded-md  flex items-center justify-center'><BsFillCalendarWeekFill size={17} className='mr-2' /> Get Appointment</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ContactUs