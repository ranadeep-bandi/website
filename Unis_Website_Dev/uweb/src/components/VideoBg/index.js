import React from 'react';
import './index.css'; // Import the CSS file
import { color } from 'framer-motion';

const VideoBg = () => {
  return (
    <div className="background-video-container">
      <video autoPlay muted loop className="background-video">
        <source src="VideosProp/215500_small.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <h1 style={{color:'whitesmoke'}}>Welcome to Unis Technosoft Pvt Ltd</h1>
        <p>
          <div style={{color:'whitesmoke',textAlign:'left'}} className="line">Where bright ideas turn into powerful realities,</div>
          <div style={{color:'whitesmoke',textAlign:'left'}} className="line">And technology leads the way to new opportunities.</div>
          <div style={{color:'whitesmoke',textAlign:'left'}} className="line">Join us, and let’s create something amazing together.</div>
        </p>
      </div>
    </div>
  );
};

export default VideoBg;
