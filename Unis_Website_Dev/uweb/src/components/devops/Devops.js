import React from 'react';
import './Devops.css';
import Footer from '../contactus/Contact';
 
const servicesData = [
  {
    title: 'Continuous Integration',
    description:
      'Automate your build and deployment process with continuous integration tools for faster and more reliable software delivery.',
    image: 'https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149370940.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
  },
  {
    title: 'Continuous Deployment',
    description:
      'Streamline your release process with continuous deployment, ensuring that code changes are automatically deployed to production.',
    image: 'https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149373211.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
  },
  {
    title: 'Infrastructure as Code',
    description:
      'Manage and provision your infrastructure using code to achieve consistency and scalability in your deployments.',
    image: 'https://img.freepik.com/free-photo/code-coding-programming-technology-technical-concept_53876-120436.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
  },
  {
    title: 'Monitoring & Logging',
    description:
      'Implement robust monitoring and logging solutions to track system performance, detect issues, and maintain operational efficiency.',
    image: 'https://img.freepik.com/free-photo/man-recording-studio-music-production_1303-20398.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
  },
  {
    title: 'Automated Testing',
    description:
      'Enhance software quality with automated testing that integrates seamlessly into your development and deployment pipeline.',
    image: 'https://img.freepik.com/free-photo/cartoon-ai-robot-character-scene_23-2151675043.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
  },
];
 
const Devops = () => {
  return (
    <div className="devops-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>DevOps Services</h1>
          <p>
            Optimize your software development lifecycle with our comprehensive DevOps solutions that enhance collaboration and efficiency.
          </p>
        </div>
        <img
          src="https://img.freepik.com/free-vector/flat-design-devops-illustration_52683-84086.jpg?t=st=1722286350~exp=1722289950~hmac=3eebf7081434ce5fef967a3b69384236147d92c275eec72b78f4d45d4c48d1a5&w=740"
          alt="DevOps"
          className="hero-image"
        />
      </header>
 
      <section className="services-section">
        <div className="expertise-description">
          <h3>Main Brief</h3>
          <p>
            Our DevOps services streamline your development and operations processes, enabling faster delivery and improved reliability. We utilize industry best practices to automate workflows, enhance collaboration, and ensure the stability of your applications.
          </p>
          <h3>Detailed Description</h3>
          <p>
            We offer a range of DevOps services including continuous integration and deployment, infrastructure as code, and automated testing. Our solutions help in managing infrastructure effectively, monitoring system performance, and maintaining high-quality software through automated testing. We focus on creating efficient workflows that integrate development and operations, leading to faster releases and improved operational efficiency.
          </p>
        </div>
        <div className="cards-container">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
              </div>
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};
 
export default Devops;
 