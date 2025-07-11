import React, { useState } from 'react';
import { Light } from './Light';

export const TrafficLight = () => {
  const [selectedLight, setSelectedLight] = useState(0);
  const [showPurple, setShowPurple] = useState(false);

  console.log(selectedLight);
  

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <div className="position-relative bg-dark rounded-4 p-3 shadow d-flex flex-column align-items-center gap-3" style={{ width: '140px' }}>

        <Light 
          lightColor="danger" 
          display={true}
          idLight={1} 
          selectedLight={selectedLight} 
          onClick={() => setSelectedLight(selectedLight === 1 ? 0 : 1)} 
        />
        <Light 
          lightColor="warning" 
          display={true}
          idLight={2} 
          selectedLight={selectedLight} 
          onClick={() => setSelectedLight(selectedLight === 2 ? 0 : 2)} 
        />
        <Light 
          lightColor="success"
          display={true}
          idLight={3} 
          selectedLight={selectedLight} 
          onClick={() => setSelectedLight(selectedLight === 3 ? 0 : 3)} 
        />
        <Light 
          lightColor="purple" 
          display={showPurple}
          idLight={4} 
          selectedLight={selectedLight} 
          onClick={() => setSelectedLight(selectedLight === 4 ? 0 : 4)}
          style={{ backgroundColor: 'purple' }}
        />

      </div>
        {/* button to change color *challenge 1* */}
        <button onClick={() => setSelectedLight(selectedLight === 3 && showPurple ? 4 : selectedLight === 2 ? 3 : selectedLight === 1 ? 2 : 1)} className="mt-3">
          Change Light Color
        </button>
        {/* button to enable or disable purple light */}
        <button onClick={() => {setShowPurple(!showPurple); setSelectedLight(showPurple && selectedLight === 4 ? 1 : !showPurple && selectedLight != 4 ? 4 : selectedLight)}} 
          className="mt-3">
          {showPurple ? 'Disable' : 'Enable'} Purple Light
        </button>
    </div>
  );
};
