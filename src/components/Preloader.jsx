import React from 'react';
import pinkDiamond from '../assets/preloaders/pink-diamond.gif';

const Preloader = () => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(15, 23, 42, 0.98)',
        zIndex: 10000,
      }}
    >
      <img 
        src={pinkDiamond} 
        alt="Loading..." 
        style={{
          width: '80px',
          height: '80px',
        }}
      />
    </div>
  );
};

export default Preloader;