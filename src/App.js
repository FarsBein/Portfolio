import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FirstSlide from './Component/HomePage/FirstSlide'
import Navbar from './Component/Navbar'
import Footer from './Component/HomePage/Footer';
import Resume from './Component/Resume/Resume';
import Cards from './Component/HomePage/Cards/Cards';
import Contact from './Component/Contact/Contact'
import {HashRouter  as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>            
        {/* <Route path='/contact'><Contact /></Route> */}
        <Route path='/projects'><Cards /></Route>
        <Route path='/resume'><Resume /></Route>
        <Route path='/'><FirstSlide /><Cards/></Route>
      </Switch>
      <Footer /> 
    </Router>
  );
}

export default App;
