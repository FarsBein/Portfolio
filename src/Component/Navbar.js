import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
const Navbar = () => {
    return (
        <div className="Navbar-notScrolled">
            <Container className='App'>
                <Row>
                    <Col className="NavText">Projects</Col>
                    <Col className="NavText">Resume</Col>
                    <Col className="NavText">Contact</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Navbar;
