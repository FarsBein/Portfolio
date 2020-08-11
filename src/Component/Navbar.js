import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import '../App.css';

const Navbar = () => {
    return (
        <ReactBootStrap.Navbar className="border-bottom justify-content-between" bg="transparent" expand="lg">
          <ReactBootStrap.Navbar.Brand href="/">Fars Bein</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle className='border-0' aria-controls="navbar-toggle" />
          <ReactBootStrap.Navbar.Collapse id="navbar-toggle">
            <ReactBootStrap.Nav className="ml-auto">

              <ReactBootStrap.Nav.Link href="/portfolio/#/">Home</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/portfolio/#/resume">Resume</ReactBootStrap.Nav.Link>
              <td onClick={()=> window.open("https://www.github.com/FarsBein", "_blank")}><ReactBootStrap.Nav.Link>Github</ReactBootStrap.Nav.Link></td>
              
              {/* <ReactBootStrap.Nav.Link href="/projects">Projects</ReactBootStrap.Nav.Link> */}
              {/* <ReactBootStrap.Nav.Link href="/contact">Contact</ReactBootStrap.Nav.Link> */}
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>        
      );
}

export default Navbar;

// import React from 'react';
// import * as ReactBootStrap from "react-bootstrap";
// import '../App.css';

// const Navbar = () => {
//     return (
//         <div className="navbar">
//           <ReactBootStrap.Navbar bg="light" expand="lg">
//             <ReactBootStrap.Navbar.Brand href="#home">Fars Bein</ReactBootStrap.Navbar.Brand>
//             <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
//               <ReactBootStrap.Nav className="mr-auto">
//                 <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
//                 <ReactBootStrap.Nav.Link href="#link">Link</ReactBootStrap.Nav.Link>
//               </ReactBootStrap.Nav>
//           </ReactBootStrap.Navbar.Collapse>
//           </ReactBootStrap.Navbar>
//         </div>
//       );
// }

// export default Navbar;