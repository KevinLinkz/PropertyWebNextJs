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
        <section id='Banner' className='w-full lg:mt-[-100px]  xs:mb-[40px]  lg:mb-[0px]'>
            {/* <div className='w-full h-full flex relative '> */}
            <div className='w-full h-full grid md:grid-cols-2 xs:grid-cols-1 grid-rows-1 relative'>
                <div className='w-full h-full flex flex-col justify-center px-10 md:order-first xs:order-last xs:mt-7'>
                    <h1 className=' w-full lg:text-[46px] xs:text-[39px] font-bold leading-tight'>Find A <span className='text-green'>Perfect Home</span> To Live With Your Family</h1>
                    <p className='my-6 font-normal text-stone-500'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                    <button className='button-green w-52 h-14'> Get Started</button>
                    <button className='button-navigation btn-next-slide absolute z-10 md:top-[49%] md:start-[48%] xs:top-[28%] xs:start-[5%]'><GrNext size="1.2em" /></button>
                    <button className='button-navigation btn-prev-slide absolute z-10 md:top-[39%] md:start-[48%] xs:top-[19%] xs:start-[5%]'><GrPrevious size="1.2em" /></button>
                </div>
                <div className='w-full  h-full md:order-last xs:order-first'>
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
                        speed={1000}
                        grabCursor
                        loop
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><Image loading='lazy' className='h-full' src={img1} alt='property-1'></Image></SwiperSlide>
                        <SwiperSlide><Image loading='lazy' className='h-full' src={img2} alt='property-2'></Image></SwiperSlide>
                    </Swiper>

                </div>

            </div>
        </section >
    )
}

export default Banner