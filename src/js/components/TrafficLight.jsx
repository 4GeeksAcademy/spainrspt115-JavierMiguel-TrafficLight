import React, { useState } from 'react';
import { Light } from './Light';

export const TrafficLight = () => {
  const [selectedLight, setSelectedLight] = useState(0);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="position-relative bg-dark rounded-4 p-3 shadow d-flex flex-column align-items-center gap-3" style={{ width: '140px' }}>

        <Light 
          lightColor="danger" 
          idLight={1} 
          selectedLight={selectedLight} 
          onClick={() => setSelectedLight(selectedLight === 1 ? 0 : 1)} 
        />
        <Light 
          lightColor="warning" 
          idLight={2} 
          selectedLight={selectedLight} 
          onClick={() => setSelectedLight(selectedLight === 2 ? 0 : 2)} 
        />
        <Light 
          lightColor="success" 
          idLight={3} 
          selectedLight={selectedLight} 
          onClick={() => setSelectedLight(selectedLight === 3 ? 0 : 3)} 
        />
        
      </div>
    </div>
  );
};
