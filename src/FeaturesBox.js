import React from 'react';

const FeaturesBox = ({ parameters }) => {
  return (
    <div className="features-box">
      <span className="img-span">
        <img className="feature-icon" src={parameters.icon} alt="icon" />
      </span>
      <div className="feature-text">
        <h3>{parameters.title}</h3>
        <p>{parameters.content}</p>
      </div>
      {parameters.pipeline ? <span className="pipeline"></span> : null}
    </div>
  );
};

export default FeaturesBox;
