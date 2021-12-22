import React from 'react';

const ShortLinkContainer = () => {
  return (
    <div className="short-link-container">
      <div className="long-link">
        <span>https://www.frontendmentor.io</span>
      </div>
      <div className="short-link">
        <span>https://rel.ink/ky5s2</span>
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
