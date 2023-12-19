import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <Container className='bg-secondary text-light text-center py-3'>
        <Row>
          <Col lg={6} className='mb-3'>
            <h2>Contact Us</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </Col>
          <Col lg={6} className='mb-3'>
            <h2>Follow Us</h2>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;