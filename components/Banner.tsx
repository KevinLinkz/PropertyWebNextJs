"use client"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCube } from 'swiper/modules';
import React from 'react'
import Image from 'next/image'
import img1 from '@img/carousel-1.jpg'
import img2 from '@img/carousel-2.jpg'
import { GrNext, GrPrevious } from 'react-icons/gr'

const Banner = () => {
    return (
        <section id='Banner' className='w-full h-[650px] border-2 border-red-500'>
            <div className='w-full h-full flex relative '>
                <div className='w-2/4 h-full flex flex-col justify-center p-10'>
                    <h1 className='w-full  text-[46px] font-bold leading-tight'>Find A <span className='text-green'>Perfect Home</span> To Live With Your Family</h1>
                    <p className='my-6 font-normal'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                    <button className='button-green w-52 h-14'> Get Started</button>

                    <button className='button-navigation btn-next-slide absolute z-10 top-[49%] start-[48%]'><GrNext size="1.2em" /></button>
                    <button className='button-navigation btn-prev-slide absolute z-10 top-[39%] start-[48%]'><GrPrevious size="1.2em" /></button>
                </div>
                <div className='w-2/4'>
                    <Swiper
                        className='w-full h-full'
                        modules={[Navigation, Autoplay, EffectCube]}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.btn-next-slide',
                            prevEl: '.btn-prev-slide'
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                        grabCursor
                        loop
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><Image loading='lazy' className='object-cover' src={img1} alt='test'></Image></SwiperSlide>
                        <SwiperSlide><Image className='object-cover' src={img2} alt='test'></Image></SwiperSlide>
                    </Swiper>

                </div>

            </div>
        </section >
    )
}

export default Banner