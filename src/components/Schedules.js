import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './Schedules.css'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';


const Schedules = () => {
  return (
    <>
    <Container>
      <Nav className="justify-content-center navtab">
        <Nav.Item>
          <Nav.Link>Saturday</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link >Sunday</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Monday</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Tuesday</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Wednesday</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Thursday</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Friday</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
      <Container className='mb-3 d-flex '>
      <Card className="justify-content-center text-center kick"  style={{ width: '18rem', background:'f7fdff' }}>
      <Card.Body className='crdtext'>
        <span className='time'>6am-8am</span>
        <Card.Text>
          <h1 style={{color:'#2c234d', fontSize:'23px', display:'block'}}>KICK BOXING</h1>
        </Card.Text>
        <p style={{color:'black', fontSize:'14px', display:'block', fontFamily:'sans-serif', lineHeight:'30px'}}>by Jhos Kusam</p>
      </Card.Body>
    </Card>
    <Card className="justify-content-center kick"  style={{ width: '18rem', background:'f7fdff' }}>
      <Card.Body className='crdtext'>
        <span className='time'>6am-8am</span>
        <Card.Text>
          <h1 style={{color:'#2c234d', fontSize:'23px', display:'block'}}>KICK BOXING</h1>
        </Card.Text>
        <p style={{color:'black', fontSize:'14px', display:'block', fontFamily:'sans-serif', lineHeight:'30px'}}>by Jhos Kusam</p>
      </Card.Body>
    </Card>
    <Card className="justify-content-center kick"  style={{ width: '18rem', background:'f7fdff' }}>
      <Card.Body className='crdtext'>
        <span className='time'>6am-8am</span>
        <Card.Text>
          <h1 style={{color:'#2c234d', fontSize:'23px', display:'block'}}>KICK BOXING</h1>
        </Card.Text>
        <p style={{color:'black', fontSize:'14px', display:'block', fontFamily:'sans-serif', lineHeight:'30px'}}>by Jhos Kusam</p>
      </Card.Body>
    </Card>
    <Card className="justify-content-center kick"  style={{ width: '18rem', background:'f7fdff' }}>
      <Card.Body className='crdtext'>
        <span className='time'>6am-8am</span>
        <Card.Text>
          <h1 style={{color:'#2c234d', fontSize:'23px', display:'block'}}>KICK BOXING</h1>
        </Card.Text>
        <p style={{color:'black', fontSize:'14px', display:'block', fontFamily:'sans-serif', lineHeight:'30px'}}>by Jhos Kusam</p>
      </Card.Body>
    </Card>
    <Card className="justify-content-center kick"  style={{ width: '18rem', background:'f7fdff' }}>
      <Card.Body className='crdtext'>
        <span className='time'>6am-8am</span>
        <Card.Text>
          <h1 style={{color:'#2c234d', fontSize:'23px', display:'block'}}>KICK BOXING</h1>
        </Card.Text>
        <p style={{color:'black', fontSize:'14px', display:'block', fontFamily:'sans-serif', lineHeight:'30px'}}>by Jhos Kusam</p>
      </Card.Body>
    </Card>
    </Container>
    </>
  )
}

export default Schedules