import Image from 'next/image'
import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'

const PropertyAgentsDiv = ({ imgUrl, name, profile, urlFacebook, urlTwitter, urlInstagram }:
    { imgUrl: string, name: string, profile: string, urlFacebook: string, urlTwitter: string, urlInstagram: string }) => {
    return (
        <div className='w-full h-full shadow-md rounded-md'>
            <Image src={imgUrl} alt={name} className='w-full h-46 rounded-t-md' width={1000} height={1000}></Image>
            <div className='flex items-center justify-center -mt-6'>
                <div className='bg-white rounded-full w-10 h-10 flex items-center justify-center mr-3 shadow-md'>
                    <a href={urlFacebook}><FaFacebookF size={20} className='text-green ' /></a>
                </div>
                <div className='bg-white rounded-full w-10 h-10 flex items-center justify-center mr-3 shadow-md'>
                    <a href={urlTwitter}><AiOutlineTwitter size={20} className='text-green ' /></a>
                </div>
                <div className='bg-white rounded-full w-10 h-10 flex items-center justify-center mr-3 shadow-md'>
                    <a href={urlInstagram}><BsInstagram size={20} className='text-green ' /></a>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center my-4'>
                <h2 className='font-bold text-xl'>{name}</h2>
                <p className='text-sm'>{profile}</p>
            </div>
        </div>
    )
}

export default PropertyAgentsDiv