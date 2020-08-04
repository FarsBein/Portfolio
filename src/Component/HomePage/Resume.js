import React from 'react';
import './HomePage.css';
import resume_web from './../../resume_web.pdf'
import { Document, Page, pdfjs  } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Resume = () => {
    return (
        <div className='resume-container'>
            <p className='title'>Resume</p>
            <Document file={resume_web}>
                <Page pageNumber={1} width={700} />
            </Document>
        </div>
    );
}

export default Resume;