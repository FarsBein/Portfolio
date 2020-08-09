import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import projectsList from '../../../Data/projectsList'
import './Cards.css'
import Modal from '../Modal/Modal'

export default function Cards() {

    return (
        <ReactBootStrap.Container className='cards-container'>
                {
                    projectsList.map((project,i) => (
                            <ReactBootStrap.Card style={{ width: '20rem',margin:"10px"}} className='card'>
                                <ReactBootStrap.Card.Img variant="top" src={project.image}/>
                                <ReactBootStrap.Card.Body>
                                    <ReactBootStrap.Card.Title>{project.title}</ReactBootStrap.Card.Title>
                                    <ReactBootStrap.Card.Text>
                                        {project.text}
                                    </ReactBootStrap.Card.Text>
                                    <ReactBootStrap.Container>
                                        <ReactBootStrap.Row>
                                            <ReactBootStrap.Button variant="light" onClick={()=> window.open(project.github, "_blank")}>Github</ReactBootStrap.Button>
                                            <Modal index={i}/>                                             
                                        </ReactBootStrap.Row>
                                       
                                    </ReactBootStrap.Container>

                                </ReactBootStrap.Card.Body>
                            </ReactBootStrap.Card>  
                    ))
                }
        </ReactBootStrap.Container>
    )
}
