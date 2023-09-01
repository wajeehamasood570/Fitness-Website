import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about from '../assests/img/gallery2/about.png'
import './AboutGym.css'

const AboutGym = () => {
    return (
        <>
            <Container >
                <Row className='m-5'>
                    <Col md={6} sm={12}>
                        <img src={about} />
                    </Col>
                    <Col md={6} sm={12}>
                        <div className='section-tittle'>
                            <span>
                                ABOUT oUR GYM
                            </span>
                            <h2>Safe Body building proper Solutions That Saves our Valuable Time!</h2>
                            <p className="pera-top py-5">Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts &amp; elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.</p>
                            <p class="mb-65 pera-bottom">Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.</p>
                            <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                                BECAME A MEMBER
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutGym