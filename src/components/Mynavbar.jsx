import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Mynavbar =(props) => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-secondary">
            <Container fluid>
                <Navbar.Brand href="#home">
                    Ebook - {props.testoAddizionale}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href="#menu">Home</Nav.Link>
                        <Nav.Link href="#prezzi">About</Nav.Link>
                        <Nav.Link href="#mappa">Browse</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
    
}

export default Mynavbar;