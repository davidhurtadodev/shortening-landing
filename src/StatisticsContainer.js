import React from 'react';
import ShortLinkContainer from './ShortLinkContainer';
import FeaturesBox from './FeaturesBox';
import brandIcon from './images/icon-brand-recognition.svg';
import recordsIcon from './images/icon-detailed-records.svg';
import customizableIcon from './images/icon-fully-customizable.svg';
import Shortener from './Shortener';

const StatisticsContainer = () => {
  const featureParameters = [
    {
      title: 'Brand Recognition',
      content: `Boost your brand recognition with each click. Generic links don't mean
      a thing. Branded link help instil confidence in your content.`,
      icon: brandIcon,
      pipeline: true,
    },
    {
      title: 'Detailed Records',
      content: `Gain insights into who is clicking your links. Knowing when and where 
      people engage with your content helps inform better decisions.`,
      icon: recordsIcon,
      pipeline: true,
    },
    {
      title: 'Fully Customizable',
      content: `Improve brand awareness and content discoverability through customizable 
      links, supercharging audience engagement.`,
      icon: customizableIcon,
      pipeline: false,
    },
  ];

  return (
    <div className="statistics-container">
      <Shortener />
      <div className="shorts-links-containers">
        <ShortLinkContainer />
      </div>
      <div className="statistics-text-container">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are perfoming across the web with our advanced
          statistics dashboards
        </p>
      </div>
      <FeaturesBox parameters={featureParameters[0]} />
      <FeaturesBox parameters={featureParameters[1]} />
      <FeaturesBox parameters={featureParameters[2]} />
    </div>
  );
};

export default StatisticsContainer;
