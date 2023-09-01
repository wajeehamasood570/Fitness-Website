import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/img/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    React Bootstrap
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <Nav.Link href="#action2">Service</Nav.Link>
                        <Nav.Link href="#action2">Schedule</Nav.Link>
                        <Nav.Link href="#action2">Gallery</Nav.Link>
                        <Nav.Link href="#action2">Blog</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                    </Nav>
                    <Button variant="outline-success">BECAME A MEMBER</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;