import React, { useState } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FirstSlide from './Component/HomePage/FirstSlide'
import Projects from './Component/HomePage/Projects'
import Navbar from './Component/Navbar'
import Footer from './Component/HomePage/Footer';
import Resume from './Component/Resume/Resume';
import Cards from './Component/HomePage/Cards/Cards';
import Contact from './Component/Contact/Contact'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [scroll,setScroll] = useState (false)
  return (
      <div >
        <Navbar />
        <Router>
          <Switch>
            <Route path='/projects'><Cards /></Route>
            {/* <Route path='/contact'><Contact /></Route> */}
            <Route path='/resume'><Resume /></Route>
            <Route path='/'><FirstSlide /><Cards/></Route>
          </Switch>
        </Router>
        <Footer />  
      </div>
  );
}

export default App;
