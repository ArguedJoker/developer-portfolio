import React from 'react';

const Tooltip = ({ text, position = 'bottom', show }) => {
  return (
    <div className={`tooltip ${position} ${show ? 'show' : ''}`}>
      {text}
    </div>
  );
};

export default Tooltip;