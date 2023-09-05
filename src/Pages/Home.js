import React from 'react'
import Hero from '../components/Hero'
import AboutGym from '../components/AboutGym'
import OurServices from '../components/OurServices'
import Testimonials from '../components/Testimonials'
import FitnessGallery from '../components/FitnessGallery'
import Contact from '../components/Contacting'
import Schedules from '../components/Schedules'
import Login from '../components/Login'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutGym />
      <OurServices />
      <Testimonials />
      <FitnessGallery />
      <div className='section-tittle text-center mt-5'>
      <span>
      OUR TIME SCHEDULE
      </span>
      </div>
      <h2 style={{ textAlign: 'center' }}>SELECT THE PERFECT TIME YOU NEED NOW</h2>
      <Schedules />
      <Contact />
      {/* <Login /> */}
    </>
  )
}

export default Home