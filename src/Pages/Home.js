import React from 'react'
import Hero from '../components/Hero'
import AboutGym from '../components/AboutGym'
import OurServices from '../components/OurServices'
import Testimonials from '../components/Testimonials'
import FitnessGallery from '../components/FitnessGallery'
import Contact from '../components/Contacting'

const Home = () => {
  return (
    <>
     <Hero/>
      <AboutGym/>
      <OurServices/>
      <Testimonials/>
      <FitnessGallery/>
      <Contact/>
    </>
  )
}

export default Home