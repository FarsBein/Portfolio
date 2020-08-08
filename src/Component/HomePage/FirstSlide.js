import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './HomePage.css';

const FirstSlide = () => {
    return (
      <ReactBootStrap.Jumbotron className='bg-transparent' >
        <ReactBootStrap.Container >
          <div className='p1 display-1 font-weight-bold' >
            Hi, my name is Fars!
          </div>
          <div className='p2 display-4 font-weight-light'>
            A computer science student with great passion for software development...        
          </div>      
          <div className='p3 lead font-weight-light'>
            Checkout my projects below           
          </div>             
        </ReactBootStrap.Container>
      </ReactBootStrap.Jumbotron>
    );
}

export default FirstSlide;
