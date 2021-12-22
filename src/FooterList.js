import React from 'react';

const FooterList = ({ content }) => {
  const renderedList = content.list.map((text) => {
    return <li key={text}>{text}</li>;
  });

  return (
    <div className="footer-list">
      <h4>{content.title}</h4>
      <ul>{renderedList}</ul>
    </div>
  );
};

export default FooterList;
