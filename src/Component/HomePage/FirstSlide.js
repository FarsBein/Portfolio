import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import '../../App.css';

const FirstSlide = () => {
    return (
      <ReactBootStrap.Jumbotron className='bg-transparent'>
        <ReactBootStrap.Container>
          <div className='display-1 font-weight-bold'>
            Hi, my name is Fars!
          </div>
          <div className='display-4 font-weight-light'>
            A computer science student with great passion for software development...         
          </div>      
          <div className='lead font-weight-light'>
            Checkout my projects below           
          </div>             
        </ReactBootStrap.Container>
      </ReactBootStrap.Jumbotron>
    );
}

export default FirstSlide;
