import React, { useState } from 'react';
import './ItConsultingServices.css';

const ItConsultingServices = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="consultancy-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 style={{marginRight:'50px'}}>IT Consulting Services</h1>
          <p  >Enhance your IT infrastructure with expert consulting services tailored to your business needs.</p>
        </div>
        <img
          src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/IT%20Consulting%20services/consultingServices%201.jpg?raw=true"
          alt="IT Consulting"
          className="hero-image"
        />
      </section>

      <section className="section">
        <div className="section-content">
          <h2>IT Strategy and Planning</h2>
          <p>Develop a comprehensive IT strategy that aligns with your business objectives and drives growth.</p>
          {showMore && (
            <p className="extra-content">
              Our consulting services help you to understand the current IT landscape, identify gaps, and create a roadmap for implementing effective solutions. Whether it's optimizing your current systems or implementing new technologies, we're here to ensure that your IT infrastructure supports your business goals.
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
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/IT%20Consulting%20services/Technology%20RoadMap.jpg?raw=true"
              alt="Technology Roadmap Development"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Technology Roadmap Development</h3>
            <p>Create a strategic technology roadmap that guides your tech investments and aligns with your business goals.</p>
          </div>
        </div>

        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/IT%20Consulting%20services/Digital%20Transformation.jpg?raw=true"
              alt="Digital Transformation Strategy"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Digital Transformation Strategy</h3>
            <p>Transform your business processes with digital solutions that improve efficiency and drive innovation.</p>
          </div>
        </div>

        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/IT%20Consulting%20services/IT%20cost%20Optimization.jpg?raw=true"
              alt="IT Cost Optimization"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>IT Cost Optimization</h3>
            <p>Optimize your IT spending with strategies that reduce costs and maximize value from your technology investments.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <h2>Infrastructure Consulting</h2>
          <p>Assess and enhance your IT infrastructure to support your business operations effectively.</p>
        </div>
      </section>

      <section className="cards-section">
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/IT%20Consulting%20services/Cloud%20services.jpg?raw=true"
              alt="Cloud Services"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Cloud Services (AWS, Azure, Google Cloud)</h3>
            <p>Leverage cloud technologies from leading providers to enhance scalability, flexibility, and performance.</p>
          </div>
        </div>

        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/IT%20Consulting%20services/networkdesign.jpg?raw=true"
              alt="Network Design and Optimization"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Network Design and Optimization</h3>
            <p>Design and optimize your network infrastructure to ensure reliable and high-performance connectivity.</p>
          </div>
        </div>

        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/IT%20Consulting%20services/CyberSecurity%20Consulting.jpg?raw=true"
              alt="Cybersecurity Assessments and Solutions"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Cybersecurity Assessments and Solutions</h3>
            <p>Protect your organization with comprehensive cybersecurity assessments and solutions to safeguard your data and systems.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <h2>Operational Efficiency</h2>
          <p>Improve your IT operations with solutions that enhance efficiency, reduce downtime, and increase productivity.</p>
        </div>
      </section>

      <section className="cards-section">
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/IT%20Consulting%20services/ITProcessImprovement.jpg?raw=true"
              alt="IT Process Improvement"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>IT Process Improvement</h3>
            <p>Streamline your IT processes to achieve better efficiency and effectiveness across your organization.</p>
          </div>
        </div>

        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/IT%20Consulting%20services/Disaster%20recovery.jpg?raw=true"
              alt="Disaster Recovery and Business Continuity"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Disaster Recovery and Business Continuity</h3>
            <p>Develop robust disaster recovery and business continuity plans to ensure your operations remain uninterrupted.</p>
          </div>
        </div>

        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/IT%20Consulting%20services/ManagedITservices.jpg?raw=true"
              alt="Managed IT Services and Support"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Managed IT Services and Support</h3>
            <p>Access comprehensive IT support and managed services to keep your technology running smoothly and efficiently.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItConsultingServices;
