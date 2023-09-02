import React from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Home from '../../Pages/Home'
import Footer from '../../components/Footer'
import Navbars from '../../components/Navbars'
import About from '../../Pages/About'
import Services from '../../Pages/Services'
import Gallery from '../../Pages/Gallery'

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
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default Routing