import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar } from 'react-bootstrap';
import Navbars from './components/Navbars';
import Footer from './components/Footer';
import AboutGym from './components/AboutGym';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import OurServices from './components/OurServices';
import FitnessGallery from './components/FitnessGallery';
import Routing from './config/Routing/Routing';

function App() {
  return (
    <>
    <Routing/>
    </>
  );
}

export default App;
