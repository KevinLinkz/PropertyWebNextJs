"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import IconDeal from '@img/icon-deal.png'
import Image from 'next/image'
import { BiSolidChevronDown } from 'react-icons/bi'
const links = [
    {
        id: 1,
        title: "HOME",
        url: "/",
        isDropdown: false,
        childPages: []
    },
    {
        id: 2,
        title: "ABOUT",
        url: "about",
        isDropdown: false,
        childPages: []
    },
    {
        id: 3,
        title: "PROPERTY",
        url: "/",
        isDropdown: true,
        childPages: [
            {
                id: 6,
                title: "Property List",
                url: "/"
            },
            {
                id: 7,
                title: "Property Type",
                url: "/"
            },
            {
                id: 8,
                title: "Property Agent",
                url: "/"
            }
        ]
    },
    {
        id: 4,
        title: "PAGES",
        url: "/",
        isDropdown: true,
        childPages: [
            {
                id: 9,
                title: "Testimonial",
                url: "/"
            },
            {
                id: 10,
                title: "404 Error",
                url: "/"
            }
        ]
    },
    {
        id: 5,
        title: "CONTACT",
        url: "contact",
        isDropdown: false,
        childPages: []
    },
]

const NavBar = () => {
    const [isOpenDropDownList, setOpenDropDownList] = useState(false);
    const [classDropDown, setClassDropDown] = useState('');

    const handleMouseOverDropDownItems = (title: string) => {
        console.log("🚀 ~ file: NavBar.tsx:75 ~ NavBar ~ classDropDown:", classDropDown)
        setClassDropDown(title)
    }
    const handleMouseLeaveDropDownItems = (title: string) => {
        console.log("🚀 ~ file: NavBar.tsx:752 ~ NavBar ~ classDropDown:", classDropDown)
        setClassDropDown('')
    }
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
                        if (link.isDropdown) {
                            return (
                                <div className='flex items-center relative h-[70px]' onMouseLeave={() => handleMouseLeaveDropDownItems(link.title)} onMouseOver={() => handleMouseOverDropDownItems(link.title)} key={`cover-dropdown-${link.id}`} >
                                    <Link className='pr-4 font-medium text-[15px] hover:text-green flex transition ease delay-100' key={link.id} href={link.url}>{link.title}<BiSolidChevronDown key={`icons-${link.id}`} className='mt-[2px] ml-[3px]' size="1em" /></Link>
                                    <div key={`dropdown-menu-${link.id}`} className={`w-40 h-max border-2 bg-white absolute top-[70px] transition-all ease duration-300 ${classDropDown === link.title ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 invisible'}`}>
                                        <ul key={`ul-menu-${link.id}`}>
                                            {link.childPages.map((childPage, index) => {
                                                return (
                                                    <li key={`dropdown-item-${index}`} className='px-3 py-1 hover:bg-gray-200'><Link key={childPage.id} href={childPage.url}>{childPage.title}</Link></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div >

                            )
                        } else {
                            return (
                                <Link className='pr-6 font-medium text-[15px] hover:text-green transition ease duration-100' key={link.id} href={link.url}>{link.title}</Link>
                            )
                        }

                    })}
                    <button className='button-green' type='button'>Add Property</button>
                </div>
            </div >
        </section >


    )
}

export default NavBar