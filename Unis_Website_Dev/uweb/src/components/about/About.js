import React from 'react';
import './About.css'; // Make sure to import the CSS file
import Footer from '../contactus/Contact'
import ScrollButton from '../../newComponents/scrollbutton/ScrollButton';
 
const About = () => {
  return (
    <div className="unis2">
      <h1 className="heading">About Us</h1>
 
      <section className="MainPart">
        <div className="Part1">
          <h3>Our Story</h3>
          <p>
            Unis Technosoft Pvt. Ltd. is a leading provider of innovative technology solutions,
            committed to delivering excellence through our range of services. Our journey began
            with a vision to empower businesses with the tools they need to succeed in an ever-changing
            digital landscape.
          </p>
        </div>
        <div className="Part2">
          <img src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/AboutUs/ourStory.jpg?raw=true" alt="Our Story" className="image1" />
        </div>
      </section>
 
      <section className="Description">
        <div className="description-section">
          <h3 >Our Mission</h3>
          <p style={{color:'whitesmoke'}}>
            Our mission is to deliver high-quality, reliable, and cost-effective IT services to help
            businesses achieve their goals and drive growth. We are dedicated to building long-term
            partnerships with our clients by consistently exceeding their expectations.
          </p>
        </div>
        <div className="description-section">
          <h3>Our Vision</h3>
          <p style={{color:'whitesmoke'}}>
            Our vision is to be a global leader in technology solutions, recognized for our innovative
            approach and customer-centric services. We aim to create a sustainable and technologically
            advanced world through our cutting-edge solutions.
          </p>
        </div>
      </section>
 
      <section className="AboutCards">
        <div className="card">
          <img src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/AboutUs/Innovation.png?raw=true" alt="Card 1" className="card-image" />
          <div className="card-content">
            <h4 className="card-title">Innovation</h4>
            <p className="card-description">
              We continuously strive to innovate and provide the most advanced solutions to our clients,
              staying ahead of the technology curve.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/AboutUs/Quality.jpg?raw=true" alt="Card 2" className="card-image" />
          <div className="card-content">
            <h4 className="card-title">Quality</h4>
            <p className="card-description">
              Quality is at the heart of everything we do, ensuring that our solutions meet the highest
              standards of excellence.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/AboutUs/Customer%20Focus.jpg?raw=true" alt="Card 3" className="card-image" />
          <div className="card-content">
            <h4 className="card-title">Customer Focus</h4>
            <p className="card-description">
              We prioritize our customers' needs, offering tailored solutions that align with their
              business goals and objectives.
            </p>
          </div>
        </div>
      </section>
       
      {/* <Footer/> */}
    </div>
   
  );
};
 
export default About;