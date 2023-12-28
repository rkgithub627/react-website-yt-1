import React from 'react';
// If your logo file is named "MountEverestComputech.png" and placed in the 'src' directory
import logoImage from './MountEverestComputech.png'; 

function Logo() {
  return (
    <div className="logo">
      <img src={logoImage} alt="Mounteverest Computech Logo" />
    </div>
  );
}

export default Logo;