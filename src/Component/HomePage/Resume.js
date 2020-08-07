import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './HomePage.css';
import resume_web from './../../resume_web.pdf'
import { Document, Page, pdfjs  } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Resume = () => {
    return (
        <div>
            <ReactBootStrap.Navbar bg="transparent">
                <ReactBootStrap.Navbar.Brand href="#home">RESUME</ReactBootStrap.Navbar.Brand>
            </ReactBootStrap.Navbar>
            <div className='justify-content-center'>
                <Document file={resume_web}>
                    <Page pageNumber={1} width={700} />
                </Document>                
            </div>

        </div>
    );
}

export default Resume;