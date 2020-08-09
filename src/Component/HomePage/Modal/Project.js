import React, { useState } from 'react'
import * as ReactBootStrap from "react-bootstrap";
import './Modal.css'

export default function Project({project}) {
    

    return (
        <div>
            {
                project.points ?
                <>
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
                            <div className='badges'>
                                {
                                    project.tools.map(tool => (
                                        <ReactBootStrap.Badge style={{marginRight:'5px'}} variant="dark">{tool}</ReactBootStrap.Badge>
                                    ))
                                }
                            </div>
                        </ReactBootStrap.Card.Text>
                    </ReactBootStrap.Card.Body> 
                </>
                :
                'Loading...'
            }
        </div> 
    )
}
