// import React from 'react';
// import '../App.css';
// import { Button } from './Button';
// import './HeroSection.css';

// function HeroSection() {
//   return (
//     <div className='hero-container'>
//       <video src='videos/video-2.mp4' autoPlay loop muted/>
// <h1>ADVENTURE AWAITS</h1>
// <p> What are you waiting for</p>
// <div className='hero-btns'>
//     <button 
//     className='btns' 
//     buttonStyle='btn-primary'
//     buttonSize='btn--large'
//     >
//   GET STARTED
//   </button>
//  <button
//     className='btns' 
//     buttonStyle='btn-outline'
//     buttonSize='btn--large'
//     >
//      WATCH TRAILER <i className='far
//         fa-play-circle'/>
//    </button>
//     </div> 
//     </div>
//   );
// }

// export default HeroSection
import React from 'react';
import './HeroSection.css';
import backgroundImage from '../MountEverestComputech.png';

function HeroSection() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`
    // Other styles...
  };

  return (
    <div className="hero-container" style={sectionStyle}>
      {/* Your content */}
    </div>
  );
}

export default HeroSection;