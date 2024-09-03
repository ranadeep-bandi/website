import React from 'react';
import './Carriers.css';
import Footer from '../contactus/Contact';
import CareerCards from '../CareersCards';
import ScrollButton from '../../newComponents/scrollbutton/ScrollButton';

//career updated code modules
import Output from './carriercomponents/components/OutPut';
 
function Carriers() {
  return (
    <div className="unis-1">
      
      <Output/>
      <hr />
      <div className='container-1-c'>
        <div className='Description-c'>
         
          <p>Join Unis Technosoft and be part of a dynamic team dedicated to innovation and excellence. We offer exciting career opportunities in various domains, fostering growth and professional development. Our collaborative environment and commitment to cutting-edge technology make us an ideal place to build your career.
          Join Unis Technosoft and be part of a dynamic team dedicated to innovation and excellence. We offer exciting career opportunities in various domains, fostering growth and professional development. Our collaborative environment and commitment to cutting-edge technology make us an ideal place to build your career.
          </p>
        </div>
        <img className="image1-c" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV9LDwhOC6eE99PfRo45zz7xMLHNRWxQYN9w&s" alt=""/>
      </div>
 
        {/* Repeat banner-card as needed */}
        {/* <CareerCards /> */}
        {/* Add more banner-cards as needed */}
       
      {/* <Footer/> */}

      {/* Adding New Career Integration Module */}

     

    </div>
  );
}
 
export default Carriers;