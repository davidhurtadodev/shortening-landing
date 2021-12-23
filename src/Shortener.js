import React from 'react';
import bgShortenMobile from './images/bg-shorten-mobile.svg';
import bgShortenDesktop from './images/bg-shorten-desktop.svg';

const Shortener = () => {
  return (
    <div className="shortener">
      <div className="input-label-div">
        <input
          className="shortener-input"
          type="text"
          placeholder="Shorten a link here..."
          id="shortener-input"
        />
        <div className="label-container">
          <label htmlFor="shortenerInput">Please add a link</label>
        </div>
      </div>
      <button className="shortener-btn" type="button">
        Shorten it!
      </button>
      <img src={bgShortenMobile} className="bg-shortener-mobile hide-dsk" />
      <img src={bgShortenDesktop} className="bg-shortener-mobile hide-xs" />
    </div>
  );
};

export default Shortener;
