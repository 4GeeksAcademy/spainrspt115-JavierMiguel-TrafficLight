import React from 'react';
import '../../styles/index.css';

export const Light = ({ lightColor, idLight, selectedLight, onClick, style, display }) => {
  return (
    <button
      onClick={onClick}
      className={`${display ? "" : "d-none"} rounded-circle ${selectedLight === idLight ? 'selected' : ''} ${lightColor === 'purple' ? '' : `bg-${lightColor}`}`}
      style={{
        width: '90px',
        height: '90px',
        ...(lightColor === 'purple' ? style : {})
        
      }}
    ></button>
  );
};