import React from 'react'
import PropertyAgentsDiv from './microComponents/PropertyAgentsDiv'
import AnimatedAOS from '@components/AnimatedAOS'

const datas = [
    {
        "id": 1,
        "img-url": "/img/team-1.jpg",
        "name": "Grace",
        "profile": "Developer",
        "urlFacebook": "www.facebook.com",
        "urlTwitter": "www.twitter.com",
        "urlInstagram": "www.instagram.com"
    },
    {
        "id": 2,
        "img-url": "/img/team-2.jpg",
        "name": "Alex",
        "profile": "Quality Assurance ",
        "urlFacebook": "www.facebook.com",
        "urlTwitter": "www.twitter.com",
        "urlInstagram": "www.instagram.com"
    },
    {
        "id": 3,
        "img-url": "/img/team-3.jpg",
        "name": "Ester",
        "profile": "Database",
        "urlFacebook": "www.facebook.com",
        "urlTwitter": "www.twitter.com",
        "urlInstagram": "www.instagram.com"
    },
    {
        "id": 4,
        "img-url": "/img/team-4.jpg",
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
            <AnimatedAOS className='flex justify-center flex-col items-center' data-aos="fade-up" data-aos-once="false" data-aos-duration="1000" data-aos-easing="ease">
                <h1 className='text-4xl font-bold mt-20 mb-3'>Property Agents</h1>
                <p className='text-stone-500 text-center w-3/5 mb-10'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </AnimatedAOS>
            <div>
                <div className='w-full h-full grid grid-cols-4 grid-rows-1 gap-5 px-6 '>
                    {
                        datas.map((data) => {
                            return (
                                <PropertyAgentsDiv key={data.id} id={data.id} imgUrl={data['img-url']} name={data.name} profile={data.profile} urlFacebook={data.urlFacebook} urlTwitter={data.urlTwitter} urlInstagram={data.urlInstagram} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default PropertyAgents