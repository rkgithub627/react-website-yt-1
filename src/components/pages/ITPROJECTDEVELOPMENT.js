//import React from "react";
import React, {useEffect, useState} from 'react';
import '../../App.css';
import'../Navbar.css';
import ITPROJECTDEVELOPMENT from './ITPROJECTDEVELOPMENT';
//import ITPROJECTDEVELOPMENT from './components/pages/ITPROJECTDEVELOPMENT';

//import { click } from '@testing-library/user-event/dist/click';

import { Link } from "react-router-dom";
import { button } from '../Button';


function Navbar() {
  const[click, setClick] = useState(false);
  const[button, setButton] =useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else{
      setButton(true);
    }
    };

    useEffect(() => {
      showButton();
    },[]);
  
    window.addEventListener('resize', showButton);
  return (
  <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick=
        {closeMobileMenu}>
        MOUNTEVEREST COMPUTECH <i className="fab fa-typo3" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : "fas fa-bars" } />
          </div>
        </div>
        <div>
          <p>- Helping your business with SEO and web development
            -complete digital social media marketing and IT services.
            -helping  with cloud computing.
            -teching some computer programing language.
            teaching technical business analyst with reallife experience.
          </p>
        </div>
        <div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
            <Link to="/ABOUT US/SERVICES" className='nav-links' onClick={closeMobileMenu}>
            ABOUTUS 
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/CAREEROPPORTUNITY" className='nav-links' onClick={closeMobileMenu}>
            CAREEROPPORTUNITY
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/EMPLOYER" className='nav-links' onClick={closeMobileMenu}>
             EMPLOYER 
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ITPROJECTDEVELOPMENT" className='nav-links' onClick={closeMobileMenu}>
            IT-PROJECTDEVELOPMENT 
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sign up" className='nav-links' onClick={closeMobileMenu}>
             SignUp 
            </Link>
          </li>
        </ul>
        <button buttonStyle='btn--outline'> SIGNUp
        </button>
        </div>
    </nav>
      </>
    );
}

export default ITPROJECTDEVELOPMENT;
