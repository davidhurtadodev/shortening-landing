import React from 'react';
import boostMobile from './images/bg-boost-mobile.svg';
import boostDesktop from './images/bg-boost-desktop.svg';

const BoostContainer = () => {
  return (
    <div className="boost-container">
      <h3>Boost your links today</h3>
      <div>
        <button type="button" className="start-btn">
          Get started
        </button>
      </div>
      <img src={boostMobile} className="bg-shortener-mobile hide-dsk" />
      <img src={boostDesktop} className="bg-shortener-mobile hide-xs" />
    </div>
  );
};

export default BoostContainer;
