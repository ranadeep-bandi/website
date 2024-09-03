// src/components/BackgroundVideo.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel CSS
import './index.css';

const VideoBg2 = () => {
  return (
    <div className="background-video-container">
      <video autoPlay muted loop className="background-video">
        <source src="VideosProp/144584-785095786_small.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="overlay1">
        <h1>Transforming Business Through Technology with Unis Technosoft</h1>
        <h2>The building block for next generation IT infrastructure Discover IT optimized foryour demand...</h2>
      </div>
      
    </div>
  );
};

export default VideoBg2;
