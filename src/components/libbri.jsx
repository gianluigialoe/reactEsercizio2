import React from "react";
import Lista from "../Assets/fantasy.json";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Libbri extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    {Lista.map((libro, index) => (
                        <Col key={index} xs={12} md={3}>
                            <Card style={{ width: '18rem', margin: '10px' }}>
                                <Card.Img variant="top" src={libro.img} alt={libro.title} />
                                <Card.Body>
                                    <Card.Title>{libro.title}</Card.Title>
                                    <Card.Text>{libro.category}</Card.Text>
                                    <Button variant="primary">Scopri di più</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default Libbri;