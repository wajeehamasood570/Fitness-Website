import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import g1 from '../assests/img/gallery2/gallery1.png'
import g2 from '../assests/img/gallery2/gallery2.png'
import g3 from '../assests/img/gallery2/gallery3.png'
import g4 from '../assests/img/gallery2/gallery4.png'
import g5 from '../assests/img/gallery2/gallery5.png'

const FitnessGallery = () => {
    return (
        <>
            <Container fluid className='mb-3'>
                <Row>
                    <Col sm={12} md={6} className='p-0'>
                        <img src={g1} height='900' width='780px' />
                    </Col>
                    <Col sm={12} md={6}>
                        <Row>
                            <Col sm={12} md={6} >
                                <img src={g2} width='380px'height='435px' style={{
                                padding:"0px 15px 15px 15px"
                            }}/>
                            </Col>
                            <Col sm={12} md={6}>
                            <img src={g3} width='auto'height='435px'style={{
                               padding:"0px 15px 15px 0px"
                            }} />
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={12} md={6} >
                                <img src={g4} width='380px'height='435px' style={{
                               padding:"0px 15px 15px 15px"
                            }}/>
                            </Col>
                            <Col sm={12} md={6}>
                            <img src={g5} width='auto'height='435px'style={{
                               padding:"0px 15px 15px 0px"
                            }} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FitnessGallery