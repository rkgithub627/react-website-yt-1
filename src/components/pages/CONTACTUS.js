
import '../../App.css';
import'../Navbar.css';
import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
// import CONTACTUS from './CONTACTUS';

//import CONTACTUS from './components/pages/CONTACTUS';
import { button } from '../Button';

//import { click } from '@testing-library/user-event/dist/click';



function CONTACTUS() {
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
          <p>MOUNTEVEREST COMPUTECH LLC
            57 DOVER DRIVE,DES PLAINES,IL, 60018
            PHONE-773-484-6024
            www.Mounteverestcomputech.com
            email-Mounteverestcomputech.com

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

export default CONTACTUS;
