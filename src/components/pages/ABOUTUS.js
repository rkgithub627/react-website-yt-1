//import React from 'react';
import '../../App.css';
import'../Navbar.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
//import ABOUTUS from './components/pages/ABOUTUS';
//import { Button } from './Button';


function ABOUTUS() {
    return(
    <>
    <HeroSection />
    <Cards />
    <Footer />
    </>
    );
}

//import { click } from '@testing-library/user-event/dist/click';


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

          <div> 
           <p>MOUNTEVEREST COMPUTECH develops software, software maintenance and be able to teach some computer 
            programing language with 21th century's era demand and expectattion along with best price. we provide
            following seevices-
           - software and web development
           -Application-design,development andmaintenance
           -Network Engineering
           -Quality Assurance and testing
           -Database design and development
           -Technical Business analyst(reallife experience)
           -Migration and deployment help(AWS,GCP,azure...)
           -Technical support
           </p>
          </div>
        </div>
        <div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
            <Link to="/ABOUTUS/SERVICES" className='nav-links' onClick={closeMobileMenu}>
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

export default ABOUTUS;
