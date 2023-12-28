import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from './Logo'; // Ensure this path is correct
import Navbar from './components/Navbar';
import ABOUTUS from './components/pages/ABOUTUS';
import CAREEROPPORTUNITY from './components/pages/CAREEROPPORTUNITY';
import EMPLOYER from './components/pages/EMPLOYER';
import ITPROJECTDEVELOPMENT from './components/pages/ITPROJECTDEVELOPMENT';
import CONTACTUS from './components/pages/CONTACTUS';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer'; // Ensure this path is correct
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <Logo />
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<ABOUTUS />} />
        <Route path="/CAREEROPPORTUNITY" element={<CAREEROPPORTUNITY />} />
        <Route path="/EMPLOYER" element={<EMPLOYER />} />
        <Route path="/ITPROJECTDEVELOPMENT" element={<ITPROJECTDEVELOPMENT />} />
        <Route path="/CONTACTUS" element={<CONTACTUS />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
  //  <div className="App">

   //   <header className="App-header">
   //     <img src={logo} className="App-logo" alt="logo" />
      //  <p>
       //   Edit <code>src/App.js</code> and save to reload.
          //    </p>
             // <p>
                //  Hello, world
                 // </p>
      //  <a>
        //  className="App-link"
         // href="https://reactjs.org"
         // target="_blank"
        //  rel="noopener noreferrer"
       // >
 //         Learn React
      //  </a>
  //    </header>
 //   </div>
  //);
//}
