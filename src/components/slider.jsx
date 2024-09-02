import React from 'react';

const Slide = ({ content }) => {
  return (
    <div className="slide">
      {content.map((element, index) => (
        <div key={index}>{element}</div>
      ))}
    </div>
  );
};

export default Slide;