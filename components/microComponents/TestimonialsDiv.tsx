import Image from 'next/image'
import React from 'react'
import img1 from '@img/testimonial-1.jpg'
import img2 from '@img/testimonial-2.jpg'

interface props { testimony: string, imgUrl: string, name: string, profession: string }

const TestimonialsDiv = ({ testimony, imgUrl, name, profession }: props) => {
    return (
        <div className='bg-green-body p-5 rounded-md w-full'>
            <div className='bg-white border border-green border-dashed border-opacity-30 p-5'>
                <p className='text-start text-stone-600 mb-3'>{testimony}</p>
                <div className='flex w-full h-full '>
                    <Image className='rounded-md w-14 h-14 mr-5' src={imgUrl} alt={name} width={500} height={500}></Image>
                    <div className='flex flex-col justify-start'>
                        <h5 className='text-lg font-semibold mb-1'>{name}</h5>
                        <p className='text-sm'>{profession}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsDiv