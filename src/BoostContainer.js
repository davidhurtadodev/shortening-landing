import React from 'react';
import boostMobile from './images/bg-boost-mobile.svg';

const BoostContainer = () => {
  return (
    <div className="boost-container">
      <img src={boostMobile} className="bg-shortener-mobile" />
      <h3>Boost your links today</h3>
      <button type="button" className="start-btn">
        Get started
      </button>
    </div>
  );
};

export default BoostContainer;
