import React from 'react'
import PropertyAgentsDiv from './microComponents/PropertyAgentsDiv'
import AnimatedAOS from '@components/AnimatedAOS'

const datas = [
    // {
    //     "id": 1,
    //     "img-url": "/img/team-1.jpg",
    //     "name": "Grace",
    //     "profile": "Developer",
    //     "urlFacebook": "www.facebook.com",
    //     "urlTwitter": "www.twitter.com",
    //     "urlInstagram": "www.instagram.com"
    // },
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
        <section id='PropertyAgents' className='w-full h-full flex justify-center flex-col items-center my-14 xl:px-5 xs:px-10'>
            <AnimatedAOS className='flex justify-center flex-col items-center' data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease">
                <h1 className='lg:text-5xl md:text-4xl xs:text-2xl  font-bold  mb-5'>Property Agents</h1>
                <p className='text-stone-500 text-center lg:w-3/5 xs:w-11/12 mb-10'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </AnimatedAOS>
            <div className='w-full h-full grid lg:grid-cols-4 sm:grid-cols-2 grid-rows-1 gap-5 '>
                {
                    datas.map((data) => {
                        return (
                            <PropertyAgentsDiv key={data.id} id={data.id} imgUrl={data['img-url']} name={data.name} profile={data.profile} urlFacebook={data.urlFacebook} urlTwitter={data.urlTwitter} urlInstagram={data.urlInstagram} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default PropertyAgents