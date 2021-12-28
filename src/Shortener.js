import React, { useState } from 'react';
import bgShortenMobile from './images/bg-shorten-mobile.svg';
import bgShortenDesktop from './images/bg-shorten-desktop.svg';

const Shortener = ({ url, setUrl, getShortUrl }) => {
  // const getShortUrl = async () => {
  //   try {
  //     const urlResponse = await fetch(
  //       `https://api.shrtco.de/v2/shorten?url=${url}`,
  //       { mode: 'cors' }
  //     );

  //     const urlData = await urlResponse.json();
  //     const shortLink = urlData.result.short_link;
  //     console.log(shortLink);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="shortener">
      <div className="input-label-div">
        <input
          className="shortener-input"
          type="text"
          placeholder="Shorten a link here..."
          id="shortener-input"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <div className="label-container">
          <label htmlFor="shortenerInput">
            {url ? 'Please add a link' : ''}
          </label>
        </div>
      </div>
      <button
        className="shortener-btn"
        type="button"
        onClick={() => getShortUrl()}
      >
        Shorten it!
      </button>
      <img src={bgShortenMobile} className="bg-shortener-mobile hide-dsk" />
      <img src={bgShortenDesktop} className="bg-shortener-mobile hide-xs" />
    </div>
  );
};

export default Shortener;
