import React from 'react';
import boostMobile from './images/bg-boost-mobile.svg';

const BoostContainer = () => {
  return (
    <div className="boost-container">
      <h3>Boost your links today</h3>
      <div>
        <button type="button" className="start-btn">
          Get started
        </button>
      </div>
      <img src={boostMobile} className="bg-shortener-mobile" />
    </div>
  );
};

export default BoostContainer;
