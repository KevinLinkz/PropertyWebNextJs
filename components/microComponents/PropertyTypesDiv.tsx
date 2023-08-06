import Image from 'next/image'
import React from 'react'
import { useInView } from 'react-intersection-observer';
import AnimatedAOS from '@components/AnimatedAOS'

interface props { id: number, title: string, desc: string, url: string }
const PropertyTypesDiv = ({ id, title, desc, url }: props) => {

  return (
    <AnimatedAOS key={id} className={`bg-green-body p-4 rounded-lg w-full`} data-aos="fade-up" data-aos-once="true" data-aos-duration='500' data-aos-delay={`${id * 100}`} data-aos-easing="ease-in-out">
      <div className='border border-green border-dashed rounded-lg bg-white group hover:bg-green transition-color ease duration-300 flex justify-center items-center flex-col p-5 '>
        <div className='rounded-full w-[80px] h-[80px] border border-green border-dashed bg-white flex justify-center items-center '>
          <Image className='object-cover' alt={title} src={url} width={45} height={45}></Image>
        </div>
        <h2 className='mt-3 font-bold group-hover:text-white'>{title}</h2>
        <span className='text-green mt-1 group-hover:text-white'>{desc}</span>
      </div>
    </AnimatedAOS>

  )
}

export default PropertyTypesDiv