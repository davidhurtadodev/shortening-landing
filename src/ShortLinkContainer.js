import React, { useState } from 'react';

const ShortLinkContainer = ({ longLink, shortLink }) => {
  //State for copied links
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(shortLink);
    setCopied(true);
  };

  return (
    <div className="short-link-container">
      <div className="long-link">
        <span>{longLink}</span>
      </div>
      <div className="short-link">
        <span>{shortLink}</span>
      </div>
      <div className="copy-container">
        <button
          type="button"
          className={copied ? 'copy-btn copied' : 'copy-btn'}
          onClick={() => {
            copyLink();
          }}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default ShortLinkContainer;
