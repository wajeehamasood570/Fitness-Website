import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './OurServices.css'


const OurServices = () => {
    return (
        <div className='services'>
            <Container>
                <div className='section-tittle'>
                    <span>
                        ABOUT oUR GYM
                    </span>
                    <div className='row mb-5'>
                        <div className='col-md-8'>
                            <h2 className='text-white mt-0'>Safe Body building proper Solutions That Saves our Valuable Time!</h2>
                        </div>
                        <div className='col-md-4'>
                            <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                                BECAME A MEMBER
                            </a>
                        </div>
                    </div>

                </div>
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <Col key={idx}>
                            <Card className='text-center'>
                                <Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRQofhDTYaCyqklTly0OYB_mJYQIWC94uJJTHUPChJb6fpUB1xg"
                                 width='35%' style={{
                                    margin:"0px auto",
                                    width:"35%"
                                 }}  />
                                <Card.Body>
                                    <Card.Title>Quality Equipment</Card.Title>
                                    <Card.Text className='p-3'>
                                        The sea freight service has grown consider ably in recent years. We spend timetting to kn.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default OurServices