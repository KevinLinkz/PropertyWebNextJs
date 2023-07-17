import './globals.css'
import '@style/style.scss'
import type { Metadata } from 'next'
import { Heebo } from '@next/font/google'
import { Inter } from '@next/font/google'

import NavBar from '@components/NavBar'

const heebo = Heebo({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${heebo.className} `}>
        <div className='container border-2 border-red-500 max-w-[1320px] h-[100vh] flex mx-auto relative'>
          <NavBar />

          {children}

        </div>
      </body>
    </html>
  )
}