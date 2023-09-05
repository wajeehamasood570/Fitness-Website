import React from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Home from '../../Pages/Home'
import Footer from '../../components/Footer'
import Navbars from '../../components/Navbars'
import About from '../../Pages/About'
import Services from '../../Pages/Services'
import Gallery from '../../Pages/Gallery'
import Contact from '../../Pages/Contact'
import Logins from '../../Pages/Logins'
import Blogs from '../../Pages/Blogs'
import Schedule from '../../Pages/Schedule'

const Routing = () => {
  return (
    <>
    <Router>
        <Navbars/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/services" element={<Services/>}/>
            <Route exact path="/gallery" element={<Gallery/>}/>
            <Route exact path="/blog" element={<Blogs/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/login" element={<Logins/>}/>
            <Route exact path="/schedule" element={<Schedule/>}/>
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default Routing