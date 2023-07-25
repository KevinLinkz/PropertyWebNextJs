import Image from 'next/image'
import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import imgTeam1 from '@img/team-1.jpg'
import PropertyAgentsDiv from './microComponents/PropertyAgentsDiv'

const datas = [
    {
        "id": 1,
        "img-url": "/team-1.jpg",
        "name": "Kevin",
        "profile": "Developer",
        "urlFacebook": "www.facebook.com",
        "urlTwitter": "www.twitter.com",
        "urlInstagram": "www.instagram.com"
    },
    {
        "id": 2,
        "img-url": "/team-2.jpg",
        "name": "Alex",
        "profile": "Quality Assurance ",
        "urlFacebook": "www.facebook.com",
        "urlTwitter": "www.twitter.com",
        "urlInstagram": "www.instagram.com"
    },
    {
        "id": 3,
        "img-url": "/team-3.jpg",
        "name": "Ester",
        "profile": "Database",
        "urlFacebook": "www.facebook.com",
        "urlTwitter": "www.twitter.com",
        "urlInstagram": "www.instagram.com"
    },
    {
        "id": 4,
        "img-url": "/team-4.jpg",
        "name": "Joshua",
        "profile": "Tester",
        "urlFacebook": "www.facebook.com",
        "urlTwitter": "www.twitter.com",
        "urlInstagram": "www.instagram.com"
    }
]

const PropertyAgents = () => {
    return (
        <section id='PropertyAgents' className='w-full h-full flex justify-center flex-col items-center'>
            <h1 className='text-4xl font-bold mt-20 mb-3'>Property Agents</h1>
            <p className='text-stone-500 text-center w-3/5 mb-10'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            <div>
                <div className='w-full h-full grid grid-cols-4 grid-rows-1 gap-5 px-6 '>
                    {
                        datas.map((data) => {
                            return (
                                <PropertyAgentsDiv key={data.id} imgUrl={data['img-url']} name={data.name} profile={data.profile} urlFacebook={data.urlFacebook} urlTwitter={data.urlTwitter} urlInstagram={data.urlInstagram} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default PropertyAgents