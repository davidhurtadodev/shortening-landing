import React from 'react';
import logo from './images/logo.svg';

const Navbar = () => {
  return (
    <div>
      <div className="logo-div">
        <img src={logo} alt="logo" className="logo" />
      </div>
    </div>
  );
};

export default Navbar;
