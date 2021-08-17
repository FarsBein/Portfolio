import React from 'react'
import * as ReactBootStrap from "react-bootstrap";

export default function Contact() {
    return (
        <ReactBootStrap.Jumbotron className='bg-transparent'>
            <ReactBootStrap.Container style={{height:'50vh'}}  className='center'>
                <h2>
                    Let's Talk
                </h2>
                <div>
                    My Email: fars.bein@ryerson.ca
                    My Linkedin: https://www.linkedin.com/in/fars-bein/
                </div>
            </ReactBootStrap.Container>
      </ReactBootStrap.Jumbotron>
    )
}
