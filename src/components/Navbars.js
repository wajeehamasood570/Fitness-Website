import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assests/img/logo/logo.png'
import { Padding } from '@mui/icons-material';
import './Navbars.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavScrollExample() {

    const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);


    return (
        <Navbar className={colorChange ? 'navbar colorChange' : 'navbar'} collapseOnSelect expand="lg" bg="bg-transparent text-dark" variant="dark" fixed="top" >
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>
                        <Nav.Link><Link to="/services">Service</Link></Nav.Link> 
                        <Nav.Link> <Link to="/schedule">Schedule</Link></Nav.Link> 
                       <Nav.Link> <Link to="/gallery">Gallery</Link></Nav.Link> 
                       <Nav.Link> <Link to="/blog">Blog</Link></Nav.Link>
                        {/* <Link to=""><Nav.Link>Blog</Nav.Link> </Link> */}
                       <Nav.Link> <Link to="/contact">Contact </Link></Nav.Link>
                       {/* <Nav.Link> <Link to="/login">Login </Link></Nav.Link> */}
                    </Nav>
                    <Button ><Link style={{
                        textDecoration:"none",
                        color:"white"
                    }}to="/login">BECAME A MEMBER</Link></Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;