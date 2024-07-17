import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './HomePage.css';
import ME  from '../../img/me.jpg'

const FirstSlide = () => {
    return (
      <ReactBootStrap.Jumbotron className='bg-transparent' >
        <ReactBootStrap.Container>
          <div className='p2 display-3 font-weight-bold' >
            Hi, my name is Fars!
          </div>
          <div className='p3 display-4 font-weight-light'>
            I’m a software developer with a passion for turning ideas into reality ♥        
          </div>   
          <br/>
          <div className='p3 lead font-weight-light'>
            &nbsp;I just happened to love solving complex problems and building stuff        
          </div>
          <div className='p4 lead font-weight-light'>
            &nbsp;My contacts:&nbsp;
            <a href='mailto:fars.bein@torontomu.ca' alt='email'>fars.bein@torontomu.ca</a>  &nbsp;         
            <a href='https://www.linkedin.com/in/fars-bein/' alt='linkedin'>linkedin.com/in/fars-bein</a> 
          </div>      
          <div className='p4 lead font-weight-light'>
            &nbsp;Checkout some of my projects below ↓          
          </div> 
        </ReactBootStrap.Container>
      </ReactBootStrap.Jumbotron>
    );
}

// with a pic of me
//<ReactBootStrap.Container className='side-way'>
//<img src={ME} alt='me' style={{maxWidth:'400px', maxHeight:'400px', padding:"10px"}} />
//<div>
//    <div className='p2 display-4 font-weight-bold' >
//      Hi, my name is Fars!
//    </div>
//    <div className='p3 display-5 font-weight-light'>
//      A computer science student with great passion for software development ♥        
//    </div>      
//    <div className='p4 lead font-weight-light'>
//      Checkout my projects below           
//    </div> 
//</div>
//</ReactBootStrap.Container>

export default FirstSlide;
