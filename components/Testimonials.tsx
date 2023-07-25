"use client"
import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import TestimonialsDiv from './microComponents/TestimonialsDiv'
import Image from 'next/image';
import img1 from '@img/testimonial-1.jpg'
import img2 from '@img/testimonial-2.jpg'

const Testimonials = () => {
    return (
        <section id='Testimonials' className='w-full h-full flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold mt-28 mb-5'>Our Clients Say!</h1>
            <p className='text-center text-stone-600 w-2/4 mb-12'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>

            <TestimonialsDiv />

            <div className='w-full h-full border-2 border-red-500'>
                <Swiper
                    className='w-full h-full'
                    modules={[Navigation, Autoplay]}
                    slidesPerView={2}
                    navigation={{
                        nextEl: '.btn-next-slide',
                        prevEl: '.btn-prev-slide'
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    speed={1000}
                    grabCursor
                    loop
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className='p-2'><TestimonialsDiv /></SwiperSlide>
                    <SwiperSlide className='p-2'><TestimonialsDiv /></SwiperSlide>
                </Swiper>
            </div>

        </section >
    )
}

export default Testimonials