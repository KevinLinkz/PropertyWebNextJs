"use client"
import Banner from '@components/Banner'
import Inquiry from '@components/Inquiry'
import PropertyTypes from '@components/PropertyTypes'
import About from '@components/About'
import PropertyListing from '@components/PropertyListing'
import ContactUs from '@components/ContactUs'
import PropertyAgents from '@components/PropertyAgents'
import Testimonials from '@components/Testimonials'
import Test2 from '@components/Test2'
import 'animate.css';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);
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
    </>
  )
}
