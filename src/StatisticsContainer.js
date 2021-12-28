import React, { useState, useEffect } from 'react';
import ShortLinkContainer from './ShortLinkContainer';
import FeaturesBox from './FeaturesBox';
import brandIcon from './images/icon-brand-recognition.svg';
import recordsIcon from './images/icon-detailed-records.svg';
import customizableIcon from './images/icon-fully-customizable.svg';
import Shortener from './Shortener';

const StatisticsContainer = () => {
  const [url, setUrl] = useState('');
  const [urlArray, setUrlArray] = useState([]);
  const [error, setError] = useState(false);

  //Empty the url input when the urlArray changes
  useEffect(() => {
    setUrl('');
  }, [urlArray]);

  //Rendering Url Array
  const renderedUrlArray = urlArray.map((object) => {
    console.log(object);

    return (
      <ShortLinkContainer
        key={object.longLink}
        longLink={object.longLink}
        shortLink={object.shortLink}
      />
    );
  });

  //GET response from API and Short url
  const getShortUrl = async () => {
    try {
      const urlResponse = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`,
        { mode: 'cors' }
      );

      const urlData = await urlResponse.json();
      const shortLink = urlData.result.short_link;

      setUrlArray((urlArray) => [
        ...urlArray,
        { longLink: url, shortLink: shortLink },
      ]);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  //Info of the parameters cards
  const featureParameters = [
    {
      title: 'Brand Recognition',
      content: `Boost your brand recognition with each click. Generic links don't mean
      a thing. Branded link help instil confidence in your content.`,
      icon: brandIcon,
      pipeline: true,
      position: 'left',
    },
    {
      title: 'Detailed Records',
      content: `Gain insights into who is clicking your links. Knowing when and where 
      people engage with your content helps inform better decisions.`,
      icon: recordsIcon,
      pipeline: true,
      position: 'mid',
    },
    {
      title: 'Fully Customizable',
      content: `Improve brand awareness and content discoverability through customizable 
      links, supercharging audience engagement.`,
      icon: customizableIcon,
      pipeline: false,
      position: 'right',
    },
  ];

  return (
    <div className="statistics-container">
      <Shortener
        url={url}
        setUrl={setUrl}
        getShortUrl={getShortUrl}
        error={error}
      />

      {renderedUrlArray !== [] ? (
        <div className="shorts-links-containers">{renderedUrlArray}</div>
      ) : null}

      <div className="statistics-text-container">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are perfoming across the web with our advanced
          statistics dashboards
        </p>
      </div>
      <div className="features-container">
        <FeaturesBox parameters={featureParameters[0]} />
        <FeaturesBox parameters={featureParameters[1]} />
        <FeaturesBox parameters={featureParameters[2]} />
      </div>
    </div>
  );
};

export default StatisticsContainer;
