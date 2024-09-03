import React, { useState } from 'react';
import './BA.css';

const BA = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="consultancy-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Business Analysis Services</h1>
          <p>Enhance your business strategies with expert analysis and tailored solutions that drive success.</p>
        </div>
        <img
          src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/BA/BAS.jpg?raw=true"
          alt="Business Analysis"
          className="hero-image"
        />
      </section>

      <section className="section">
        <div className="section-content">
          <h2>Business Process Improvement</h2>
          <p>Analyze and optimize your business processes to increase efficiency and effectiveness across your organization.</p>
          {showMore && (
            <p className="extra-content">
              Our business analysis services include a deep dive into your current processes, identifying bottlenecks, and providing actionable recommendations to streamline operations. We work with you to develop solutions that enhance productivity and support your strategic goals.
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
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/BA/Stratagic%20planning.jpg?raw=true"
              alt="Strategic Planning"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Strategic Planning</h3>
            <p>Develop a comprehensive business strategy that aligns with your objectives and drives growth.</p>
          </div>
        </div>

        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/BA/Marketting%20analysis.jpg?raw=true"
 
              alt="Market Analysis"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Market Analysis</h3>
            <p>Gain insights into market trends and customer behavior to make informed business decisions.</p>
          </div>
        </div>

        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/BA/Data_Analysis.jpg?raw=true"
              alt="Data Analysis"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Data Analysis</h3>
            <p>Utilize data analytics to uncover trends, forecast outcomes, and optimize your business performance.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <h2>Business Requirements</h2>
          <p>Identify and document business requirements to ensure that solutions align with your needs and objectives.</p>
        </div>
      </section>

      <section className="cards-section">
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/BA/Requirement%20gathering.jpg?raw=true"
              alt="Requirements Gathering"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Requirements Gathering</h3>
            <p>Collect and analyze requirements to ensure that your projects meet business needs and expectations.</p>
          </div>
        </div>

        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/BA/Solution%20Deaign.jpg?raw=true"
              alt="Solution Design"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Solution Design</h3>
            <p>Design and recommend solutions that effectively address business challenges and drive success.</p>
          </div>
        </div>

        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/BA/ProjectManagement.jpg?raw=true"
              alt="Project Management"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Project Management</h3>
            <p>Manage projects efficiently with a focus on delivering results within scope, budget, and timeline.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <h2>Change Management</h2>
          <p>Support organizational change with strategies and solutions that facilitate smooth transitions and adoption.</p>
        </div>
      </section>

      <section className="cards-section">
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/BA/Change%20Management.jpg?raw=true"
              alt="Change Management"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Change Management</h3>
            <p>Implement change management practices to help your organization adapt and thrive in a dynamic environment.</p>
          </div>
        </div>

        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/BA/Consulting%20Services.jpg?raw=true"
              alt="Consulting Services"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Consulting Services</h3>
            <p>Provide expert advice and support to help your business solve complex problems and achieve its goals.</p>
          </div>
        </div>

        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/BA/Business%20Improvement.jpg?raw=true"
              alt="Business Improvement"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Business Improvement</h3>
            <p>Enhance your business processes and strategies to drive continuous improvement and growth.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BA;
