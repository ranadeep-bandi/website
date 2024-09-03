import React, { useRef, useState, useEffect } from 'react';
import './index.css';
import CareerCards from '../CareersCards';
 
const Marquee = ({ image }) => {
  const marqueeRef = useRef(null);
  const [direction, setDirection] = useState('normal');
 
  useEffect(() => {
    const marquee = marqueeRef.current;
    const handleAnimationEnd = () => {
      setDirection((prevDirection) => (prevDirection === 'normal' ? 'reverse' : 'normal'));
    };
 
    marquee.addEventListener('animationiteration', handleAnimationEnd);
 
    return () => {
      marquee.removeEventListener('animationiteration', handleAnimationEnd);
    };
  }, []);
 
  return (
    <div className="marquee-container">
      <div className={`marquee ${direction}`} ref={marqueeRef}>
      <CareerCards />
      </div>
    </div>
  );
};
 
const DashBanner = () => {
  const imageUrl = 'https://www.unistechnosoft.com/wp-content/uploads/2021/12/unis.png';
 
  return (
    <div className="App">
      <Marquee />
    </div>
  );
};
 
export default DashBanner;