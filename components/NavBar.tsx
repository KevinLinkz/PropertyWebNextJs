"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import IconNav from '@img/icon-deal.png'
import Image from 'next/image'
import { BiSolidChevronDown } from 'react-icons/bi'
import { RxHamburgerMenu } from 'react-icons/rx'
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
        url: "/about",
        isDropdown: false,
        childPages: []
    },
    {
        id: 3,
        title: "PROPERTY",
        url: "/property/list",
        isDropdown: true,
        childPages: [
            {
                id: 6,
                title: "Property List",
                url: "/property/list"
            },
            {
                id: 7,
                title: "Property Type",
                url: "/property/type"
            },
            {
                id: 8,
                title: "Property Agent",
                url: "/property/agent"
            }
        ]
    },
    {
        id: 4,
        title: "PAGES",
        url: "/pages/testimonial",
        isDropdown: true,
        childPages: [
            {
                id: 9,
                title: "Testimonial",
                url: "/pages/testimonial"
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
        url: "/contact",
        isDropdown: false,
        childPages: []
    },
]

const NavBar = () => {
    const [isNavbarSticky, setIsNavbarSticky] = useState<boolean>(false);
    const [isToggleMenu, setIsToggleMenu] = useState<boolean>(false);
    const [isNavbarActive, setIsNavbarActive] = useState<string>('HOME');
    const [isNavbarChildActive, setIsNavbarChildActive] = useState<string>('');
    const [classDropDown, setClassDropDown] = useState<string>('');
    const [offsetNavBar, setOffsetNavBar] = useState<number>(0);
    const refNavBar = useRef<HTMLDivElement>(null)

    const handleMouseOverDropDownItems = (title: string) => {
        setClassDropDown(title)
    }
    const handleMouseLeaveDropDownItems = (title: string) => {
        setClassDropDown('')
    }

    const setParentChildMenuActive = (strParentTitle: string, strChildTitle: string) => {
        setIsNavbarActive(strParentTitle)
        setIsNavbarChildActive(strChildTitle);
    }
    const setParentMenuActive = (strParentTitle: string) => {
        setIsNavbarActive(strParentTitle)
        setIsNavbarChildActive('');
    }
    const setMobileParentChildMenuActive = (strParentTitle: string, strChildTitle: string) => {
        setIsNavbarActive(strParentTitle)
        setIsNavbarChildActive(strChildTitle);
        setIsToggleMenu(false)
    }
    const setMobileParentMenuActive = (strParentTitle: string) => {
        setIsNavbarActive(strParentTitle)
        setIsNavbarChildActive('');
        setIsToggleMenu(false)

    }

    const handleNavBar = () => {
        const nav = refNavBar.current as HTMLDivElement;
        (window.scrollY > (nav.offsetHeight - offsetNavBar)) ? setIsNavbarSticky(true) : setIsNavbarSticky(false)
    }
    const handleNavBarResize = () => {
        const widthClient = window.innerWidth as number;
        if (widthClient >= 1024)
            setOffsetNavBar(70)
        else
            setOffsetNavBar(700)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleNavBar);
        window.addEventListener('resize', handleNavBarResize);
        handleNavBar();
        handleNavBarResize();
        return () => {
            window.removeEventListener('scroll', handleNavBar);
            window.removeEventListener('resize', handleNavBarResize);
        }
    }, [offsetNavBar, handleNavBar])

    return (
        <div ref={refNavBar} id='Navbar' className={`lg:h-[100px] lg:flex z-20 transition-all ease duration-500 ${isNavbarSticky === true ? 'sticky top-0 items-start px-0' : 'items-end lg:px-8'}`}>
            <div className='w-full h-[70px] flex justify-between items-center px-5 bg-white shadow-lg'>
                <div className='flex justify-center items-center h-full cursor-pointer'>
                    <div className='flex justify-center items-center w-11 h-11 border border-green border-dashed rounded-full'>
                        <Image src={IconNav} alt='Real Estate Deal' className='w-7 h-7'></Image>
                    </div>
                    <h2 className=' text-green text-4xl my-auto ml-2 font-bold'>Houses</h2>
                </div>

                <div className='lg:flex w-30 items-center pr-2 xs:hidden'>
                    {links.map((link) => {
                        if (link.isDropdown) {
                            return (
                                <div className='flex items-center relative h-[70px]' onMouseLeave={() => handleMouseLeaveDropDownItems(link.title)} onMouseOver={() => handleMouseOverDropDownItems(link.title)} key={`cover-dropdown-${link.id}`} >
                                    <Link onClick={() => setIsNavbarActive(link.title)} className={`pr-5 font-medium text-[16px] hover:text-green flex transition ease delay-100 ${isNavbarActive === link.title ? 'text-green' : ''}`} key={link.id} href={link.url}>{link.title}<BiSolidChevronDown key={`icons-${link.id}`} className={`mt-[2px] ml-[3px] transition-transform ease duration-500  ${isNavbarActive === link.title ? '-rotate-180' : 'rotate-0'}`} size="1em" /></Link>
                                    <div key={`dropdown-menu-${link.id}`} className={`w-40 h-max border-2 bg-white absolute top-[70px] transition-all ease duration-300 ${classDropDown === link.title ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 invisible'}`}>
                                        <ul key={`ul-menu-${link.id}`}>
                                            {link.childPages.map((childPage, index) => {
                                                return (
                                                    <li onClick={() => setParentChildMenuActive(link.title, childPage.title)} key={`dropdown-item-${index}`} className={`px-3 py-1 hover:bg-gray-200 ${isNavbarChildActive === childPage.title ? 'text-white bg-green' : ''}`}><Link key={childPage.id} href={childPage.url}>{childPage.title}</Link></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div >

                            )
                        } else {
                            return (
                                <Link onClick={() => setParentMenuActive(link.title)} className={`pr-6 font-medium text-[16px] hover:text-green transition ease duration-100 ${isNavbarActive === link.title ? 'text-green' : ''}`} key={link.id} href={link.url}>{link.title}</Link>
                            )
                        }

                    })}
                    <button className='button-green ' type='button'>Add Property</button>
                </div>
                <button type='button' onClick={() => { setIsToggleMenu(!isToggleMenu) }} className={`border border-grey-600 rounded w-14 h-10 flex items-center justify-center nav-toggler lg:hidden `} >
                    <RxHamburgerMenu size={30} />
                </button>
            </div >
            {/* Mobile toggler */}
            <div className={`w-full shadow mb-10 px-3 bg-white lg:hidden transition-all duration-700  overflow-hidden ${isToggleMenu ? 'max-h-96' : 'max-h-0'}`}>
                <div className=' border-t border-grey-500'>
                    <ul className='px-2 space-y-3 py-2 '>
                        {links.map((link) => {
                            if (link.isDropdown) {
                                return (
                                    <li key={`mobile-li-${link.id}`} className='w-full' onClick={() => setIsNavbarActive(link.title)}>
                                        <Link className={`hover:text-green pr-5 font-medium text-[16px] flex transition ease duration-100 ${isNavbarActive === link.title ? 'text-green' : ''}`} key={link.id} href={link.url}>{link.title}<BiSolidChevronDown key={`icons-${link.id}`} className={`mt-[2px] ml-[3px] transition-transform ease duration-200  ${isNavbarActive === link.title ? '-rotate-180' : 'rotate-0'}`} size="1em" /></Link>
                                        <div className={`border border-gray-400 w-full ${isNavbarActive === link.title ? '' : 'hidden'}`}>
                                            <ul key={`ul-menu-${link.id}`} className='py-3 space-y-2'>
                                                {link.childPages.map((childPage, index) => {
                                                    return (
                                                        <li key={`dropdown-item-${index}`} className={`px-3  hover:bg-gray-200 ${isNavbarChildActive === childPage.title ? 'text-white bg-green' : ''}`}><Link key={childPage.id} onClick={() => setMobileParentChildMenuActive(link.title, childPage.title)} href={childPage.url}>{childPage.title}</Link></li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </li>
                                )
                            } else {
                                return (
                                    <li key={`mobile-li-${link.id}`} className='w-full hover:text-green cursor-pointer' onClick={() => setMobileParentMenuActive(link.title)}><Link className={`font-medium text-[16px]  transition ease duration-100 ${isNavbarActive === link.title ? 'text-green' : ''}`} key={link.id} href={link.url}>{link.title}</Link></li>
                                )
                            }

                        })}
                    </ul>
                </div>
            </div>
        </div >

    )
}

export default NavBar