import React from 'react';
import '../../styles/index.css';

export const Light = ({ lightColor, idLight, selectedLight, onClick }) => {
  return (

    <button
      onClick={onClick}
      className={`rounded-circle bg-${lightColor} ${selectedLight === idLight ? "selected" : ""}`}
      style={{ width: '90px', height: '90px' }}
    >
    </button>
    
  );
};
