import React, { useState } from 'react';
import './EduTechPro.css';
 
const EduTechPro = () => {
  const [showMore, setShowMore] = useState(false);
 
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
 
  return (
    <div className="consultancy-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>EduTechPro Solutions</h1>
          <p>Extracting insights from data for informed decisions and enhanced educational outcomes.</p>
        </div>
        <img
          src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/EduTechPro/EdutechProSolutions.jpg?raw=true"
          alt="EduTechPro Solutions"
          className="hero-image"
        />
      </section>
 
      <section className="section">
        <div className="section-content">
          <h2>Data Analytics for Education</h2>
          <p>Leverage data analytics to improve educational strategies and student performance.</p>
          {showMore && (
            <p className="extra-content">
              Our data analytics solutions provide deep insights into student learning patterns, engagement levels, and academic performance. By analyzing this data, educational institutions can make data-driven decisions that enhance curriculum development, teaching methods, and student support services, leading to improved educational outcomes.
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
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/EduTechPro/EduTechDataAnalytics.jpg?raw=true"
              alt="Educational Data Analytics"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Educational Data Analytics</h3>
            <p>Analyze educational data to gain insights into student performance and curriculum effectiveness.</p>
          </div>
        </div>
 
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/EduTechPro/LearningAnalytics.jpg?raw=true"
              alt="Learning Analytics"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Learning Analytics</h3>
            <p>Utilize learning analytics to enhance teaching methods and improve student engagement.</p>
          </div>
        </div>
 
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/EduTechPro/DataManagement.jpg?raw=true"
              alt="Data Management in Education"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Data Management</h3>
            <p>Efficiently manage and organize educational data for better accessibility and utilization.</p>
          </div>
        </div>
      </section>
 
      <section className="section">
        <div className="section-content">
          <h2>Customized Reporting</h2>
          <p>Create tailored reports to address specific educational needs and objectives.</p>
        </div>
      </section>
 
      <section className="cards-section">
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/EduTechPro/CustomizedReporting.jpg?raw=true"
              alt="Customized Reporting"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Customized Reporting</h3>
            <p>Generate customized reports to track progress, identify trends, and support decision-making in education.</p>
          </div>
        </div>
 
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/EduTechPro/EductionalInsight.jpg?raw=true"
              alt="Educational Insights"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Educational Insights</h3>
            <p>Gain valuable insights into student learning behaviors and educational outcomes for strategic planning.</p>
          </div>
        </div>
 
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/EduTechPro/ResearchandDevelopment.jpg?raw=true"
              alt="Research and Development"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Research and Development</h3>
            <p>Advance educational research with data-driven approaches to enhance learning experiences and outcomes.</p>
          </div>
        </div>
      </section>
 
      <section className="section">
        <div className="section-content">
          <h2>Educational Technology Integration</h2>
          <p>Integrate advanced technology solutions to support and enhance educational delivery and management.</p>
        </div>
      </section>
 
      <section className="cards-section">
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/EduTechPro/TechnologyIntegration.jpg?raw=true"
              alt="Tech Integration"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Technology Integration</h3>
            <p>Integrate cutting-edge technologies into educational systems to enhance learning and operational efficiency.</p>
          </div>
        </div>
 
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/EduTechPro/TechSolution.jpg?raw=true"
              alt="Tech Solutions"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Tech Solutions</h3>
            <p>Implement technology solutions that address specific educational needs and drive innovation.</p>
          </div>
        </div>
 
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/EduTechPro/EduTechStratergy.jpg?raw=true"
              alt="EdTech Strategy"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>EdTech Strategy</h3>
            <p>Develop and execute strategies for integrating technology into the educational environment to achieve optimal results.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
 
export default EduTechPro;