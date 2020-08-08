import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './Resume.css';
import resume from './resume_web-1.jpg'
import resumeFile from './resume_web.pdf'

const Resume = () => {
    return (
        <ReactBootStrap.Container className='resume-container'>
            <a href={resumeFile} download><ReactBootStrap.Button variant="light" download>Click to download</ReactBootStrap.Button></a>
            <ReactBootStrap.Image src={resume} className='resume-img'/>
        </ReactBootStrap.Container>
    );
}

export default Resume;