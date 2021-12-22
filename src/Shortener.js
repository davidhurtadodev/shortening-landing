import React from 'react';
import bgShortenMobile from './images/bg-shorten-mobile.svg';

const Shortener = () => {
  return (
    <div className="shortener">
      <input
        className="shortener-input"
        type="text"
        placeholder="Shorten a link here..."
      />
      <button className="shortener-btn" type="button">
        Shorten it!
      </button>
      <img src={bgShortenMobile} className="bg-shortener-mobile" />
    </div>
  );
};

export default Shortener;
