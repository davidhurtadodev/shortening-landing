import React from 'react';
import logo from './images/logo.svg';
import menuBars from './images/menu.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-nav">
        <div className="logo-div">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="left-list hide-xs">
          <ul className="nav-list">
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Resources</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bars-div hide-dsk">
        <img src={menuBars} alt="menu" className="menu-bars" />
      </div>
      <div className="right-nav hide-xs">
        <div className="login-a">
          <a>Login</a>
        </div>
        <div>
          <button className="sign-nav" type="button">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
