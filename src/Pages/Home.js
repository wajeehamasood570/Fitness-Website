import React from 'react'
import Hero from '../components/Hero'
import AboutGym from '../components/AboutGym'
import OurServices from '../components/OurServices'
import Testimonials from '../components/Testimonials'
import FitnessGallery from '../components/FitnessGallery'

const Home = () => {
  return (
    <>
     <Hero/>
      <AboutGym/>
      <OurServices/>
      <Testimonials/>
      <FitnessGallery/>
    </>
  )
}

export default Home