import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import TestimonialsDiv from './microComponents/TestimonialsDiv'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import AnimatedAOS from '@components/AnimatedAOS'

const datas = [
    {
        "id": 1,
        "testimony": "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos.",
        "img-url": "/img/testimonial-1.jpg",
        "name": "Lala",
        "profession": "CEO",

    },
    {
        "id": 2,
        "testimony": "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos.",
        "img-url": "/img/testimonial-2.jpg",
        "name": "Pooh",
        "profession": "CTO",

    },
    {
        "id": 3,
        "testimony": "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos.",
        "img-url": "/img/testimonial-3.jpg",
        "name": "Twinkie",
        "profession": "Engineer",

    },
    {
        "id": 4,
        "testimony": "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos.",
        "img-url": "/img/testimonial-4.jpg",
        "name": "Dipsy",
        "profession": "Marketing",

    },
]

const Testimonials = () => {
    return (
        <AnimatedAOS className='' data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease">
            <section id='Testimonials' className='w-full h-full flex flex-col justify-center items-center mb-20 xl:px-5 xs:px-10'>
                <h1 className='md:text-4xl xs:text-2xl font-bold mt-28 mb-5'>Our Clients Say!</h1>
                <p className='text-center text-stone-600 lg:w-3/5 xs:w-11/12  mb-12'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>

                <div className='grid grid-cols-[5%,90%,5%]  w-full'>
                    <div className=' flex items-center justify-center '>
                        <BsFillArrowLeftCircleFill size={40} className="text-green btn-prev-testimonials cursor-pointer" />
                    </div>

                    <div className='w-full h-full'>
                        <Swiper
                            className='w-full h-full'
                            modules={[Navigation, Autoplay]}
                            navigation={{
                                nextEl: '.btn-next-testimonials',
                                prevEl: '.btn-prev-testimonials'
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 1,
                                },
                                1024: {
                                    slidesPerView: 2,
                                },
                            }}
                            speed={1000}
                            grabCursor
                            loop
                        >
                            {
                                datas.map((data) => {
                                    return (
                                        <SwiperSlide key={data.id} className='px-3'>
                                            <TestimonialsDiv testimony={data.testimony} imgUrl={data['img-url']} name={data.name} profession={data.profession} />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>

                    <div className='flex items-center justify-center'>
                        <BsFillArrowRightCircleFill size={40} className="text-green btn-next-testimonials cursor-pointer" />
                    </div>
                </div>

            </section >
        </AnimatedAOS>

    )
}

export default Testimonials