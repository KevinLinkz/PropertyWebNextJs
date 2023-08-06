"use client"
import './globals.css'
import '@style/style.scss'
import type { Metadata } from 'next'
import { Heebo } from '@next/font/google'
import { Inter } from '@next/font/google'

import NavBar from '@components/NavBar'
import Footer from '@components/Footer'
import { GoArrowUp } from 'react-icons/go'
import { useEffect, useState } from 'react'

const heebo = Heebo({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Sell Property',
  description: 'Sell, Rent, Marketing property',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  const handleScroll = () => {
    const scrolled = window.scrollY as number;

    scrolled > 300 ? setFloatButtonToTop(true) : setFloatButtonToTop(false)
  }

  const scrollToTop = () => {
    console.log("🚀 ~ file: layout.tsx:30 ~ scrollToTop ~ 10:", 10)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const [floatButtonToTop, setFloatButtonToTop] = useState<boolean>();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)

    }
  }, [])
  return (
    <html lang="en">
      <body className={`${inter.variable} ${heebo.className} bg-green-body`}>

        <div className='container 2xl:max-w-[1320px] lg:max-w-[1320px] md:max-w-[1024px] sm:max-w-[640px] xs:max-w-[576px]  flex flex-col mx-auto relative bg-white '>
          {/* <div className='container flex flex-col mx-auto relative bg-white '> */}

          <NavBar />

          {children}
          <Footer />


        </div>
        <div className={`rounded-full w-12 h-12 bg-green flex items-center justify-center fixed bottom-10 right-10 z-20 cursor-pointer transition-opacity duration-700 ${floatButtonToTop ? 'visible opacity-100' : 'invisible opacity-0'}`} onClick={scrollToTop}>
          <GoArrowUp size={25} className={`text-white stroke-1 `} />
        </div>
      </body>
    </html>
  )
}
