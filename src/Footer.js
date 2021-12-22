import React from 'react';
import FooterList from './FooterList';
import instagram from './images/icon-instagram.svg';
import pinterest from './images/icon-pinterest.svg';
import twitter from './images/icon-twitter.svg';
import facebook from './images/icon-facebook.svg';

const Footer = () => {
  const listContent = [
    {
      title: 'Features',
      list: ['Link shortening', 'Branded links', 'Analytics'],
    },
    {
      title: 'Resources',
      list: ['Blog', 'Developers', 'Support'],
    },
    {
      title: 'Company',
      list: ['About', 'Our team', 'Careers', 'Contact'],
    },
  ];

  return (
    <div className="footer">
      <h3>Shortly</h3>
      <FooterList content={listContent[0]} />
      <FooterList content={listContent[1]} />
      <FooterList content={listContent[2]} />
      <div className="social-container">
        <div className="social-img-container">
          <img src={facebook} className="social-img" alt="social" />
        </div>
        <div className="social-img-container">
          <img src={twitter} className="social-img" alt="social" />
        </div>
        <div className="social-img-container">
          <img src={pinterest} className="social-img" alt="social" />
        </div>
        <div className="social-img-container">
          <img src={instagram} className="social-img" alt="social" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
