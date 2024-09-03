import React, { useState } from 'react';
import './ApplicationDevelopment.css';
 
 
const ApplicationDevelopment = () => {
  const [showMore, setShowMore] = useState(false);
 
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
 
  return (
    <div className="consultancy-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Application Development Services</h1>
          <p>Transform your business ideas into robust applications with our expert development services.</p>
        </div>
        <img
          src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/WebApplication/Frontend_development.jpg?raw=true"
          alt="Application Development"
          className="hero-image"
        />
      </section>
 
      <section className="section">
        <div className="section-content">
          <h2>Custom Application Development</h2>
          <p>Build tailored applications that meet your unique business needs and enhance operational efficiency.</p>
          {showMore && (
            <p className="extra-content">
              We offer end-to-end custom application development services, from ideation and design to development, testing, and deployment. Our solutions are designed to align with your business goals and deliver exceptional user experiences.
            </p>
          )}
          <button className="read-more-btn" onClick={toggleShowMore}>
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </section>
 
      <section className="cards-section">
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/WebApplication/Mobile%20app%20dev.jpg?raw=true"
              alt="Mobile App Development"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Mobile App Development</h3>
            <p>Create high-performance mobile applications for iOS and Android platforms with cutting-edge technologies.</p>
          </div>
        </div>
 
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/WebApplication/WebAppDev.jpg?raw=true"
              alt="Web Application Development"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Web Application Development</h3>
            <p>Develop scalable and secure web applications that provide seamless user experiences across all devices.</p>
          </div>
        </div>
 
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/WebApplication/EnterpriceApplication.jpg?raw=true"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Enterprise Application Development</h3>
            <p>Build robust enterprise applications that streamline business processes and enhance productivity.</p>
          </div>
        </div>
      </section>
 
      <section className="section">
        <div className="section-content">
          <h2>Application Modernization</h2>
          <p>Revitalize your legacy applications with modern technologies to improve performance and functionality.</p>
        </div>
      </section>
 
      <section className="cards-section">
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/WebApplication/Legacyapplication.jpg?raw=true"
              alt="Legacy Application Modernization"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Legacy Application Modernization</h3>
            <p>Transform your outdated systems with modern architectures and technologies to ensure they meet current business demands.</p>
          </div>
        </div>
 
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/WebApplication/software%20upgrade.jpg?raw=true"
              alt="Software Upgrade"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Software Upgrade</h3>
            <p>Enhance your existing software with the latest features and improvements to keep pace with evolving business needs.</p>
          </div>
        </div>
 
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/WebApplication/cloud%20application%20development.jpg?raw=true"
              alt="Cloud Application Development"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Cloud Application Development</h3>
            <p>Develop cloud-based applications that offer scalability, flexibility, and cost-efficiency for your business.</p>
          </div>
        </div>
      </section>
 
      <section className="section">
        <div className="section-content">
          <h2>Application Support and Maintenance</h2>
          <p>Ensure the ongoing success of your applications with dedicated support and maintenance services.</p>
        </div>
      </section>
 
      <section className="cards-section">
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/WebApplication/AppicationSupport.jpg?raw=true"
              alt="Application Support"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Application Support</h3>
            <p>Receive expert support to troubleshoot issues, optimize performance, and ensure your applications run smoothly.</p>
          </div>
        </div>
 
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/WebApplication/Applicationmaintanance.jpg?raw=true"
              alt="Application Maintenance"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Application Maintenance</h3>
            <p>Keep your applications up-to-date with regular maintenance and enhancements to meet evolving requirements.</p>
          </div>
        </div>
 
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/WebApplication/Software%20support%20nd%20maintanance.jpg?raw=true"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Software Support and Maintenance</h3>
            <p>Access comprehensive support and maintenance services to ensure your software remains reliable and effective.</p>
          </div>
        </div>
      </section>
     
    </div>
  );
};
 
export default ApplicationDevelopment;