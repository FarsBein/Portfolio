import React from 'react'
import * as ReactBootStrap from "react-bootstrap";

export default function Contact() {
    return (
        <ReactBootStrap.Jumbotron className='bg-transparent'>
            <ReactBootStrap.Container>
                <div className='display-1 font-weight-bold'>
                    Let's Talk
                </div>
                <ReactBootStrap.Form>
                    <ReactBootStrap.Form.Group>
                        <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control type="email" />
                    </ReactBootStrap.Form.Group>

                    <ReactBootStrap.Form.Group>
                        <ReactBootStrap.Form.Label>First Name</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control type="text"/>
                    </ReactBootStrap.Form.Group>

                    <ReactBootStrap.Form.Group>
                        <ReactBootStrap.Form.Label>Textarea</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control as="textarea" rows="3" />
                    </ReactBootStrap.Form.Group>
                    <ReactBootStrap.Button variant="primary" type="submit">
                        Submit
                    </ReactBootStrap.Button>
                </ReactBootStrap.Form>
            </ReactBootStrap.Container>
      </ReactBootStrap.Jumbotron>
    )
}
