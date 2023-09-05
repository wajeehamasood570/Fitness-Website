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
            <Container fluid className='gallary'>
                <Row>
                    <Col sm={12} lg={6}  >
                        <img src={g1} height='825' width='100%' />
                    </Col>
                    <Col sm={12} md={6}>
                        <Row>
                            <Col sm={6} md={6} >
                                <img src={g2} width='300px'height='408px' className='mb-2' />
                            </Col>
                            <Col sm={6} md={6}>
                            <img src={g3} width='300px'height='408px' />
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={6} md={6} >
                                <img src={g4} width='300px'height='408px' className='mb-2'/>
                            </Col>
                            <Col sm={6} md={6}>
                            <img src={g5} width='300px'height='408px' />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FitnessGallery