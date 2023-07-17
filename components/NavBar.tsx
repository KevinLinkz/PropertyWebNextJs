import Link from 'next/link'
import React from 'react'
import IconDeal from '@img/icon-deal.png'
import Image from 'next/image'

const links = [
    {
        id: 1,
        title: "HOME",
        url: "/"
    },
    {
        id: 2,
        title: "ABOUT",
        url: "about"
    },
    {
        id: 3,
        title: "PROPERTY",
        url: "/"
    },
    {
        id: 4,
        title: "PAGES",
        url: "/"
    },
    {
        id: 5,
        title: "CONTACT",
        url: "contact"
    },
]

const NavBar = () => {
    return (
        <section id='Navbar'>
            <div className='flex justify-between items-center p-2  h-[70px] bg-white absolute top-10 inset-x-10 z-10 shadow-lg' >
                <div className='flex justify-center items-center h-full cursor-pointer'>
                    <div className='flex justify-center items-center w-9 h-9 border-2 border-green border-dashed rounded-full'>
                        <Image src={IconDeal} alt='Real Estate Deal' className='w-6 h-6 '></Image>

                    </div>
                    <h2 className='text-green text-4xl my-auto ml-2 font-bold'>Makaan</h2>
                </div>

                <div className='flex w-30 items-center pr-2'>
                    {links.map((link) => {
                        return (
                            <Link className='pr-5 font-medium text-[15px] hover:text-green' key={link.id} href={link.url}>{link.title}</Link>
                        )
                    })}
                    <button className='button-green' type='button'>Add Property</button>
                </div>
            </div >
        </section>


    )
}

export default NavBar