import React from 'react';
import logo from './images/logo.svg';
import menuBars from './images/menu.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-div">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="bars-div">
        <img src={menuBars} alt="menu" className="menu-bars" />
      </div>
    </div>
  );
};

export default Navbar;
