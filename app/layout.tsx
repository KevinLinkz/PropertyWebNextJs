import './globals.css'
import '@style/style.scss'
import type { Metadata } from 'next'
import { Heebo } from '@next/font/google'
import { Inter } from '@next/font/google'

import NavBar from '@components/NavBar'
import Footer from '@components/Footer'

const heebo = Heebo({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Sell Property',
  description: 'Sell, Rent, Marketing property',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${heebo.className} bg-green-body`}>
        <div className='container border border-red-500 lg:max-w-[1320px] md:max-w-[992px] sm:max-w-[767px] xs:max-w-[576px] h-[100%] flex flex-col mx-auto relative bg-white '>

          <NavBar />

          {children}
          <Footer />


        </div>
      </body>
    </html>
  )
}
