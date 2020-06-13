import React from 'react';
import '../App.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
              <div>LOGO</div>
              <ul>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Projects</a></li>
              </ul>
            </nav>
        </div>
      );
}

export default Navbar;
