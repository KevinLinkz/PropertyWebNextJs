import Link from 'next/link'
import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BiSolidEnvelope } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import AnimatedAOS from '@components/AnimatedAOS'

const ContactUsPage = () => {
    return (
        <section id='ContactUsContact' className='h-full my-24 mx-5'>
            <AnimatedAOS className='w-full h-full flex justify-center items-center flex-col my-10' data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease">
                <h1 className='lg:text-5xl md:text-4xl xs:text-2xl font-bold mb-5'>Contact Us</h1>
                <p className='text-stone-500 text-center lg:w-3/5 xs:w-11/12'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </AnimatedAOS>
            <div className='grid lg:grid-cols-3  md:grid-cols-2 grid-rows-1 gap-5  my-10' data-aos="fade-in" data-aos-once="true" data-aos-duration="1000" data-aos-delay="100" data-aos-easing="ease">
                <AnimatedAOS className='w-full h-full bg-green-body flex items-center justify-center p-5 rounded'>
                    <div className='w-full h-full border border-dashed border-green rounded flex items-center gap-5 bg-white p-4'>
                        <div className='flex justify-center items-center w-12 h-12 rounded-full border border-dashed border-green text-green'><MdLocationOn size={25} /></div>
                        <h5>123 Street, New York, USA</h5>
                    </div>
                </AnimatedAOS>
                <AnimatedAOS className='w-full h-full bg-green-body flex items-center justify-center p-5 rounded' data-aos="fade-in" data-aos-once="true" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="ease">
                    <div className='w-full h-full border border-dashed border-green rounded flex items-center gap-5 bg-white p-4'>
                        <div className='flex justify-center items-center w-12 h-12 rounded-full border border-dashed border-green text-green'><BiSolidEnvelope size={25} /></div>
                        <h5>info@example.com</h5>
                    </div>
                </AnimatedAOS>
                <AnimatedAOS className='w-full h-full bg-green-body flex items-center justify-center p-5 rounded' data-aos="fade-in" data-aos-once="true" data-aos-duration="1000" data-aos-delay="600" data-aos-easing="ease">
                    <div className='w-full h-full border border-dashed border-green rounded flex items-center gap-5 bg-white p-4'>
                        <div className='flex justify-center items-center w-12 h-12 rounded-full border border-dashed border-green text-green'><BsFillTelephoneFill size={25} /></div>
                        <h5>+012 345 6789</h5>
                    </div>
                </AnimatedAOS>
            </div>

            <div className='w-full h-full grid md:grid-cols-2 xs:grid-cols-1 grid-rows-1 grid-auto-rows gap-5 '>
                <AnimatedAOS className='w-full h-full' data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease">
                    <iframe className='w-full  md:h-full xs:h-[300px] '
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.01068970948!2d-74.1448286910757!3d40.69737043524534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sKota%20New%20York%2C%20New%20York%2C%20Amerika%20Serikat!5e0!3m2!1sid!2sid!4v1691479185839!5m2!1sid!2sid"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </AnimatedAOS>

                <AnimatedAOS className='w-full h-full ' data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-delay="500" data-aos-easing="ease">
                    <p>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <Link href=''>Download Now.</Link></p>
                    <form>
                        <div className='w-full h-full grid  md:grid-cols-2 xs:grid-cols-1 grid-rows-5  gap-3 my-5'>
                            <div>
                                <input type='text' placeholder='Your Name' className='input-text w-full h-[50px] px-5 border-gray-400' />
                            </div>
                            <div>
                                <input type='text' placeholder='Your Email' className='input-text w-full h-[50px] px-5 border-gray-400' />
                            </div>
                            <div className='md:col-span-2'>
                                <input type='text' placeholder='Subject' className='input-text w-full h-[50px] px-5 border-gray-400' />
                            </div>
                            <div className='md:col-span-2 row-span-3'>
                                <textarea placeholder='Message' className='input-text  w-full h-full py-3 px-5 border-gray-400' />
                            </div>

                        </div>
                        <div className=''>
                            <button className='button-green w-full h-14'>Send Message</button>
                        </div>
                    </form>
                </AnimatedAOS>
            </div >

        </section >
    )
}

export default ContactUsPage