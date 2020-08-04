import React from 'react';
import '../App.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
              <div style={{'cursor': 'pointer'}}>FarsBein</div>
                <ul>
                  <li><a href="#">Resume</a></li>
                  <li><a href="#">Projects</a></li>
                </ul>
            </nav>
        </div>
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