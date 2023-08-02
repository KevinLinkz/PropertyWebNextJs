"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import IconNav from '@img/icon-deal.png'
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
    const [isNavbarSticky, setIsNavbarSticky] = useState(false);
    const [isNavbarActive, setIsNavbarActive] = useState('HOME');
    const [classDropDown, setClassDropDown] = useState('');
    const refNavBar = useRef<HTMLDivElement>(null)

    const handleMouseOverDropDownItems = (title: string) => {
        setClassDropDown(title)
    }
    const handleMouseLeaveDropDownItems = (title: string) => {
        setClassDropDown('')
    }

    const handleNavLinkActive = (title: string, event: Element) => {
        setIsNavbarActive(title);
    }

    const handleNavBar = () => {
        const nav = refNavBar.current as HTMLDivElement;
        (window.scrollY > (nav.offsetHeight - 70)) ? setIsNavbarSticky(true) : setIsNavbarSticky(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleNavBar);
        handleNavBar();
        return () => {
            window.removeEventListener('scroll', handleNavBar);
        }
    }, [])

    return (
        <div ref={refNavBar} id='Navbar' className={` h-[120px] flex  z-20  transition-all ease duration-500 ${isNavbarSticky === true ? 'sticky top-0 items-start px-0' : 'items-end px-8'}`}>
            <div className='w-full h-[70px] flex justify-between items-center px-5 bg-white shadow-2xl'>
                <div className='flex justify-center items-center h-full cursor-pointer'>
                    <div className='flex justify-center items-center w-11 h-11 border border-green border-dashed rounded-full'>
                        <Image src={IconNav} alt='Real Estate Deal' className='w-7 h-7'></Image>
                    </div>
                    <h2 className=' text-green text-4xl my-auto ml-2 font-bold'>Makaan</h2>
                </div>

                <div className='flex w-30 items-center pr-2'>
                    {links.map((link) => {
                        if (link.isDropdown) {
                            return (
                                <div className='flex items-center relative h-[70px]' onMouseLeave={() => handleMouseLeaveDropDownItems(link.title)} onMouseOver={() => handleMouseOverDropDownItems(link.title)} key={`cover-dropdown-${link.id}`} >
                                    <Link onClick={() => setIsNavbarActive(link.title)} className={`pr-5 font-medium text-[16px] hover:text-green flex transition ease delay-100 ${isNavbarActive === link.title ? 'text-green' : ''}`} key={link.id} href={link.url}>{link.title}<BiSolidChevronDown key={`icons-${link.id}`} className={`mt-[2px] ml-[3px] transition-all ease duration-500  ${isNavbarActive === link.title ? '-rotate-180' : 'rotate-0'}`} size="1em" /></Link>
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
                                <Link onClick={() => setIsNavbarActive(link.title)} className={`pr-6 font-medium text-[16px] hover:text-green transition ease duration-100 ${isNavbarActive === link.title ? 'text-green' : ''}`} key={link.id} href={link.url}>{link.title}</Link>
                            )
                        }

                    })}
                    <button className='button-green ' type='button'>Add Property</button>
                </div>
            </div >
        </div >


    )
}

export default NavBar