import React,{useState} from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import Project from './Project';
import projectsList from '../../../Data/projectsList'

export default function Modal({index}) {
    const [show, setShow] = useState(false);
    const [project] = useState(projectsList[index])


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <ReactBootStrap.Button variant="light" onClick={handleShow} style={{marginLeft:'10px'}}>
                Details
            </ReactBootStrap.Button>
            <ReactBootStrap.Modal show={show} onHide={handleClose}>
                <ReactBootStrap.Modal.Header closeButton>
                <ReactBootStrap.Modal.Title>Modal heading</ReactBootStrap.Modal.Title>
                </ReactBootStrap.Modal.Header>
                <ReactBootStrap.Modal.Body><Project project={project}/></ReactBootStrap.Modal.Body>
                <ReactBootStrap.Modal.Footer>
                <ReactBootStrap.Button variant="secondary" onClick={handleClose}>
                    Close
                </ReactBootStrap.Button>

                </ReactBootStrap.Modal.Footer>
            </ReactBootStrap.Modal>
        </div>
    )
}
