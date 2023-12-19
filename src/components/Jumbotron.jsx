import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Jumbotron extends React.Component {
    render() {
        return (
            <Container className='bg-secondary'>
                <Row className='justify-content-center align-items-center'>
                    <Col lg={6} className='text-center'>
                        <h1>Welcome</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Jumbotron;