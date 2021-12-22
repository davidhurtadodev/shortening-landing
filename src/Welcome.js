import React from 'react';
import illustration from './images/illustration-working.svg';

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="illustration-div">
        <img src={illustration} alt="illustration" className="illustration" />
      </div>
      <div className="text-div">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insight on how your
          links are perfoming.
        </p>
        <button type="button" className="start-btn">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Welcome;
