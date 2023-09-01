import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar } from 'react-bootstrap';
import Navbars from './components/Navbars';
import Footer from './components/Footer';
import AboutGym from './components/AboutGym';

function App() {
  return (
    <div>
      <Navbars/>
      <AboutGym/>
      <Footer/>
    </div>
  );
}

export default App;
