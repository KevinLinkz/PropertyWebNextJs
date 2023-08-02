import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { BiSolidEnvelope, BiLogoLinkedin } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import { BsYoutube, BsFillTelephoneFill } from 'react-icons/bs'
import AnimatedAOS from '@components/AnimatedAOS'



const Footer = () => {
    return (
        <AnimatedAOS className='' data-aos="fade-in" data-aos-once="false" data-aos-duration="1000" data-aos-easing="ease">
            <section id='Footer' className='w-full border-2 border-red-500 bg-darkblue '>
                <div className='grid grid-cols-4 grid-rows-1 gap-y-10 w-full px-7 pt-20 '>
                    <div className='w-full h-full flex flex-col'>
                        <h3 className='text-xl fon flex flex-col font-bold text-white mb-7'>Get In Touch</h3>
                        <span className='flex items-center text-slate-400 text-md font-medium mb-2'><MdLocationOn size={20} className='mr-4' />123 Street, New York, USA</span>
                        <span className='flex items-center text-slate-400 text-md font-medium mb-2'><BsFillTelephoneFill size={20} className='mr-4' />+012 345 67890</span>
                        <span className='flex items-center text-slate-400 text-md font-medium mb-5'><BiSolidEnvelope size={20} className='mr-4' />info@example.com</span>
                        <div className='flex text-white'>
                            <div className='rounded-full border w-8 h-8 mr-2 flex justify-center items-center'><AiOutlineTwitter size={17} /></div>
                            <div className='rounded-full border w-8 h-8 mr-2 flex justify-center items-center'><FaFacebookF size={17} /></div>
                            <div className='rounded-full border w-8 h-8 mr-2 flex justify-center items-center'><BsYoutube size={17} /></div>
                            <div className='rounded-full border w-8 h-8 mr-2 flex justify-center items-center'><BiLogoLinkedin size={17} /></div>
                        </div>

                    </div>
                    <div>
                        <h3 className='text-xl fon flex flex-col font-bold text-white mb-7'>Quick Links</h3>
                        <ul className='text-slate-400 space-y-1'>
                            <li className='flex items-center font-medium hover:tracking-widest transition-all  duration-300'> <IoIosArrowForward className='mr-2' /> <Link href=''> About Us</Link></li>
                            <li className='flex items-center font-medium hover:tracking-widest transition-all  duration-300'> <IoIosArrowForward className='mr-2' /> <Link href=''> Contact Us</Link></li>
                            <li className='flex items-center font-medium hover:tracking-widest transition-all  duration-300'> <IoIosArrowForward className='mr-2' /> <Link href=''> Our Services</Link></li>
                            <li className='flex items-center font-medium hover:tracking-widest transition-all  duration-300'> <IoIosArrowForward className='mr-2' /> <Link href=''> Privacy Policy</Link></li>
                            <li className='flex items-center font-medium hover:tracking-widest transition-all  duration-300'> <IoIosArrowForward className='mr-2' /> <Link href=''> Terms & Condition</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xl fon flex flex-col font-bold text-white mb-7'>Photo Gallery</h3>
                        <div className='grid grid-cols-3 grid-rows-2 gap-2 w-[90%] h-42'>
                            <div className='border-4 border-white rounded w-full h-16'><Image src='/img/property-1.jpg' alt='property-footer-1' className='w-full h-full ' width={500} height={500}></Image></div>
                            <div className='border-4 border-white rounded w-full h-16'><Image src='/img/property-2.jpg' alt='property-footer-2' className='w-full h-full ' width={500} height={500}></Image></div>
                            <div className='border-4 border-white rounded w-full h-16'><Image src='/img/property-3.jpg' alt='property-footer-3' className='w-full h-full ' width={500} height={500}></Image></div>
                            <div className='border-4 border-white rounded w-full h-16'><Image src='/img/property-4.jpg' alt='property-footer-4' className='w-full h-full ' width={500} height={500}></Image></div>
                            <div className='border-4 border-white rounded w-full h-16'><Image src='/img/property-5.jpg' alt='property-footer-5' className='w-full h-full ' width={500} height={500}></Image></div>
                            <div className='border-4 border-white rounded w-full h-16'><Image src='/img/property-6.jpg' alt='property-footer-6' className='w-full h-full ' width={500} height={500}></Image></div>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl fon flex flex-col font-bold text-white mb-7'>Newsletter</h3>
                        <p className='text-slate-400 font-medium mb-3'>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className='w-full relative '>
                            <input type='text' className='focus:ring focus:ring-green w-[96%] h-14 px-5 bg-transparent border border-white rounded text-slate-400' placeholder='Your Email'></input>
                            <button className='absolute top-[15%] right-5 button-green'>SignUp</button>
                        </div>
                    </div>
                </div>

                <div className='col-span-full w-full h-20 border-t border-slate-600 text-slate-400 font-medium flex justify-between px-5 my-5 py-5 mt-20'>
                    <div className=''>
                        <p>© <span className='text-white underline underline-offset-2'>Your Site Name</span>, All Right Reserved. Designed By <span className='text-white underline underline-offset-2'>HTML Codex</span></p>
                        <p>Distributed By <span className='text-white underline underline-offset-2'>ThemeWagon</span></p>
                    </div>

                    <div className='text-white'>
                        <Link href='' className='border-r-2 border-slate-600 px-3'>Home</Link>
                        <Link href='' className='border-r-2 border-slate-600 px-3'>Cookies</Link>
                        <Link href='' className='border-r-2 border-slate-600 px-3'>Help</Link>
                        <Link href='' className='px-3'>FAQs</Link>
                    </div>
                </div>
            </section>
        </AnimatedAOS>

    )
}

export default Footer