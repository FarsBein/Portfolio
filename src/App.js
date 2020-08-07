import React, { useState } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FirstSlide from './Component/HomePage/FirstSlide'
import Projects from './Component/HomePage/Projects'
import Navbar from './Component/Navbar'
import Footer from './Component/HomePage/Footer';
import Resume from './Component/HomePage/Resume';


function App() {
  const [scroll,setScroll] = useState (false)
  return (
      <div >
        <Navbar />

          <FirstSlide />
          <ReactBootStrap.Container>
            <Projects />
          </ReactBootStrap.Container>
          <Resume />
        <Footer />  
      </div>
  );
}

export default App;
