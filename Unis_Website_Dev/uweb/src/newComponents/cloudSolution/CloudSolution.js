import React, { useState } from 'react';
import './CloudSolution.css';

const CloudSolution = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="consultancy-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Cloud Solutions</h1>
          <p>Transform your business with flexible and scalable cloud solutions tailored to your needs.</p>
        </div>
        <img
          src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/Cloud%20Solutions/Cloud%20solutions.jpg?raw=true"
          alt="Cloud Solutions"
          className="hero-image"
        />
      </section>

      <section className="section">
        <div className="section-content">
          <h2>Cloud Migration</h2>
          <p>Seamlessly transition your on-premises infrastructure to the cloud with minimal disruption.</p>
          {showMore && (
            <p className="extra-content">
              Our cloud migration services ensure a smooth transition from traditional infrastructure to the cloud. We handle everything from initial assessment and planning to data migration and deployment, ensuring that your cloud environment is optimized for performance and cost-efficiency.
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
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/Cloud%20Solutions/Cloud%20Migration.jpg?raw=true"
              alt="Cloud Migration"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Cloud Migration</h3>
            <p>Efficiently migrate your data and applications to the cloud while minimizing risks and downtime.</p>
          </div>
        </div>

        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/Cloud%20Solutions/cloud%20infrastructure.jpg?raw=true"
              alt="Cloud Infrastructure"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Cloud Infrastructure</h3>
            <p>Build and manage scalable cloud infrastructure that supports your business operations and growth.</p>
          </div>
        </div>

        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/Cloud%20Solutions/Cloud%20security.jpg?raw=true"
              alt="Cloud Security"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Cloud Security</h3>
            <p>Protect your data and applications with advanced cloud security solutions and compliance measures.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <h2>Cloud Optimization</h2>
          <p>Optimize your cloud resources and costs with our expert cloud management services.</p>
        </div>
      </section>

      <section className="cards-section">
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/Cloud%20Solutions/Costoptimization.jpg?raw=true"
              alt="Cost Optimization"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Cost Optimization</h3>
            <p>Reduce cloud costs through effective resource management and cost-saving strategies.</p>
          </div>
        </div>

        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/Cloud%20Solutions/Cloud%20monitoring.jpg?raw=true"
              alt="Cloud Monitoring"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Cloud Monitoring</h3>
            <p>Monitor and manage your cloud resources with real-time visibility and automated alerts.</p>
          </div>
        </div>

        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/Cloud%20Solutions/Data%20Management.jpg?raw=true"
              alt="Data Management"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Data Management</h3>
            <p>Efficiently manage and organize your data in the cloud to enhance accessibility and reliability.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <h2>Cloud Integration</h2>
          <p>Integrate cloud services with your existing systems to enhance functionality and streamline operations.</p>
        </div>
      </section>

      <section className="cards-section">
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/Cloud%20Solutions/Cloud%20Integration.jpg?raw=true"
              alt="Cloud Integration"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Cloud Integration</h3>
            <p>Seamlessly integrate cloud solutions with your on-premises systems to ensure interoperability and efficiency.</p>
          </div>
        </div>

        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/Cloud%20Solutions/APIintegration.jpg?raw=true"
              alt="API Integration"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>API Integration</h3>
            <p>Connect and synchronize applications with cloud-based APIs for enhanced functionality and data flow.</p>
          </div>
        </div>

        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/Cloud%20Solutions/Serviceoptimization.jpg?raw=true"
              alt="Service Optimization"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Service Optimization</h3>
            <p>Optimize cloud services for performance, reliability, and cost-effectiveness, ensuring the best outcomes for your business.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudSolution;