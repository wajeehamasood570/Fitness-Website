import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about from '../assests/img/gallery2/about2.png'
import './AboutGym.css'

const Testimonials = () => {
  return (
    <Container >
    <Row className='m-5'>
        <Col md={6} sm={12}>
            <img src={about} />
        </Col>
        <Col md={6} sm={12}>
            <div className='section-tittle'>
                <span>
                Client Feedback
                </span>
                <h2>What Our Client thik about our gym</h2>
                <p className="pera-top py-5">Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts &amp; elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.</p>
               
            </div>
        </Col>
    </Row>
</Container>
  )
}

export default Testimonials