import Image from 'next/image'
import React from 'react'
import img1 from '@img/testimonial-1.jpg'
import img2 from '@img/testimonial-2.jpg'

const TestimonialsDiv = () => {
    return (
        <div className='bg-green-body p-5 rounded-md w-full'>
            <div className='bg-white border border-green border-dashed p-5'>
                <p className='text-start text-stone-600 mb-3'>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos.</p>
                <div className='flex w-full h-full '>
                    <Image className='rounded-md w-14 h-14 mr-5' src={img1} alt='test'></Image>
                    <div className='flex flex-col justify-start'>
                        <h5 className='text-lg font-semibold mb-1'>Client Name</h5>
                        <p className='text-sm'>Profession</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsDiv