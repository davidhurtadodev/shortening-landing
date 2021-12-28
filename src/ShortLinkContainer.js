import React from 'react';

const ShortLinkContainer = ({ longLink, shortLink }) => {
  return (
    <div className="short-link-container">
      <div className="long-link">
        <span>{longLink}</span>
      </div>
      <div className="short-link">
        <span>{shortLink}</span>
      </div>
      <div className="copy-container">
        <button type="button" className="copy-btn">
          Copy
        </button>
      </div>
    </div>
  );
};

export default ShortLinkContainer;
