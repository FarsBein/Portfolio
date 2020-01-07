import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FirstSlide from './Component/HomePage/FirstSlide'
import Projects from './Component/HomePage/Projects'
import Navbar from './Component/Navbar'
import project_1 from './img/project_1.jpg'
function App() {
  const [scroll,setScroll] = useState (false)

  

  return (
    <div className="scroll">
      <Navbar />
      <FirstSlide />
      <Projects />
    </div>
  );
}

export default App;
