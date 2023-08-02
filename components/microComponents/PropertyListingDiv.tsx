import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { FaRulerCombined, FaBed, FaBath } from 'react-icons/fa'
import Image from 'next/image'
import AnimatedAOS from '@components/AnimatedAOS'


interface props { imgUrl: string, type: string, typeBuilding: string, price: number, title: string, address: string, area: number, bed: number, bath: number, id: number }

const PropertyListingDiv = ({ id, imgUrl, type, typeBuilding, price, title, address, area, bed, bath }: props) => {
    function numberWithCommas(x: number) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    var priceDelimiter = numberWithCommas(price);
    return (
        <AnimatedAOS className='w-full h-full flex flex-col relative shadow-lg box-content' data-aos="fade-up" data-aos-once="false" data-aos-duration="1000" data-aos-delay={`${id * 200}`} >
            <div className='w-full overflow-hidden rounded-t-lg'>
                <Image src={imgUrl} alt={title} className='w-full h-full mb-3 object-fit rounded-t-lg hover:scale-125 ease-in-out duration-500' width={600} height={400}></Image>
            </div>
            <button className='bg-green px-4 py-1 absolute top-6 left-6 rounded-md text-white'>{type}</button>
            <div className='bg-white text-green px-4 py-1 rounded-md absolute top-[260px] left-5'>{typeBuilding}</div>
            <h3 className='text-green text-xl font-bold ml-5 mb-3  mt-3'>${priceDelimiter}</h3>
            <h3 className='ml-5 text-xl font-bold mb-1'>{title}</h3>
            <p className='flex ml-4 mb-2 text-stone-500 items-center'><MdLocationOn size={22} className='text-green mr-1' />{address}</p>
            <div className='grid grid-rows-1 grid-cols-3 w-full h-10 border-t border-dashed border-green border-opacity-30'>
                <div className='text-stone-600 flex items-center justify-center'>
                    <FaRulerCombined size={13} className='mr-2 text-green' />
                    {area} Sqft
                </div>
                <div className='border-l border-r border-green border-dashed border-opacity-30 text-stone-600 flex items-center justify-center'>
                    <FaBed size={17} className='mr-2 text-green' />
                    {bed} Bed
                </div>
                <div className='text-stone-600 flex items-center justify-center'>
                    <FaBath size={13} className='mr-2 text-green' />
                    {bath} Bath
                </div>
            </div>
        </AnimatedAOS>

    )
}

export default PropertyListingDiv