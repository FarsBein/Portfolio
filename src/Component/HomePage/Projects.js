import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import project_1 from '../../img/project_1.jpg'
import './HomePage.css';
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import projectsList from '../../Data/projectsList'

const Projects = () => {

    return (
        <ReactBootStrap.Container>
            {
                projectsList.map((project) => (
                    <div className='cards-body'>
                        <ReactBootStrap.Image className="project-image" src={project.image} alt={project.title} rounded/>
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title >{project.title}</ReactBootStrap.Card.Title>
                            <ReactBootStrap.Card.Text className="lead" style={{fontSize:"15px"}}>
                                <div className='points'>
                                    {
                                        project.points.map(point => (
                                        <p>{point}</p> 
                                        ))   
                                    }                                
                                </div>
                                <div>{project.text}</div>
                                <div className='badges'>
                                    {
                                        project.tools.map(tool => (
                                            <ReactBootStrap.Badge style={{marginRight:'5px'}} variant="dark">{tool}</ReactBootStrap.Badge>
                                        ))
                                    }
                                </div>
                            </ReactBootStrap.Card.Text>
                            <ReactBootStrap.Button variant="primary">github</ReactBootStrap.Button>
                        </ReactBootStrap.Card.Body>
                    </div>                      
                ))
            }
        </ReactBootStrap.Container>
    );
}




export default Projects;
