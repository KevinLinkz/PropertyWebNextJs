import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { FaRulerCombined, FaBed, FaBath } from 'react-icons/fa'
import Image from 'next/image'

const PropertyListingDiv = ({ imgUrl, type, typeBuilding, price, title, address, area, bed, bath }:
    { imgUrl: string, type: string, typeBuilding: string, price: number, title: string, address: string, area: number, bed: number, bath: number }) => {
    return (
        <div className='w-full h-full flex flex-col relative shadow-lg'>
            <Image src={imgUrl} alt='test' className='w-full h-full mb-3 object-cover rounded-t-lg hover:scale-110' width={1000} height={500}></Image>
            <button className='bg-green p-2 py-1 absolute top-4 left-5 rounded-lg text-white'>{type}</button>
            <div className='bg-white text-green px-4 py-1 rounded-md absolute top-[250px] left-5'>{typeBuilding}</div>
            <h3 className='text-green text-xl font-bold ml-5 mb-3  mt-3'>${price}</h3>
            <h3 className='ml-5 text-xl font-bold mb-1'>{title}</h3>
            <p className='flex ml-4 mb-2 text-stone-500 items-center'><MdLocationOn size={22} className='text-green mr-1' />{address}</p>
            <div className='grid grid-rows-1 grid-cols-3 w-full h-full'>
                <div className='border border-green border-dotted text-stone-600 flex items-center justify-center h-10'>
                    <FaRulerCombined size={13} className='mr-2 text-green' />
                    {area} Sqft
                </div>
                <div className='border border-green border-dashed text-stone-600 flex items-center justify-center'>
                    <FaBed size={17} className='mr-2 text-green' />
                    {bed} Bed
                </div>
                <div className='border border-green border-dashed text-stone-600 flex items-center justify-center'>
                    <FaBath size={13} className='mr-2 text-green' />
                    {bath} Bath
                </div>
            </div>
        </div>
    )
}

export default PropertyListingDiv