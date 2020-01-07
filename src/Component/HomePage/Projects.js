import React from 'react';
import { Col,Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import project_1 from '../../img/project_1.jpg'

const Projects = () => {
    return (
        <div className="App">
            <header className="App-header2">
                <Container>
                    <br />
                    <Row className="project-area">
                        <Col>
                            <img src={project_1} alt=""/>
                        </Col>
                        <Col>
                            some info...
                        </Col>                        
                    </Row>
                    <Row className="project-area">
                        <Col>
                            <img src={project_1} alt=""/>
                        </Col>
                        <Col>
                            some info...
                        </Col>                        
                    </Row>
                    <Row className="project-area">
                        <Col>
                            <img src={project_1} alt=""/>
                        </Col>
                        <Col>
                            some info...
                        </Col>                        
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default Projects;
