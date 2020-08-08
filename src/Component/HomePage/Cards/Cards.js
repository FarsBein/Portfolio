import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import project_1 from '../../../img/project_1.jpg'
import projectsList from '../../../Data/projectsList'
import './Cards.css'

export default function Cards() {
    return (
        <ReactBootStrap.Container className='cards-container'>
                {
                    projectsList.map((project,i) => (
                            <ReactBootStrap.Card style={{ width: '20rem',margin:"10px" }}>
                                <ReactBootStrap.Card.Img variant="top" src={project_1}/>
                                <ReactBootStrap.Card.Body>
                                    <ReactBootStrap.Card.Title>{project.title}</ReactBootStrap.Card.Title>
                                    <ReactBootStrap.Card.Text>
                                        online advertising service that operates as a centralized network of online communities for posting cooperation requests
                                    </ReactBootStrap.Card.Text>
                                    <ReactBootStrap.Button variant="light">Github</ReactBootStrap.Button>
                                </ReactBootStrap.Card.Body>
                            </ReactBootStrap.Card>  
                    ))
                }
        </ReactBootStrap.Container>
    )
}
