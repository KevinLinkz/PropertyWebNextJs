import Image from 'next/image'
import Banner from '@components/Banner'
import Inquiry from '@components/Inquiry'
import PropertyTypes from '@components/PropertyTypes'
import About from '@components/About'
import PropertyListing from '@components/PropertyListing'
import ContactUs from '@components/ContactUs'
import PropertyAgents from '@components/PropertyAgents'
import Testimonials from '@components/Testimonials'
import Footer from '@components/Footer'
import Test2 from '@components/Test2'

export default function Home() {
  return (
    <>
      {/* <Test2 /> */}
      <Banner />
      <Inquiry />
      <PropertyTypes />
      <About />
      <PropertyListing />
      <ContactUs />
      <PropertyAgents />
      <Testimonials />
      <Footer />
    </>
  )
}
