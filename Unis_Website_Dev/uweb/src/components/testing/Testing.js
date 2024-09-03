// src/components/Testing.js
 
import React from 'react';
import './Testing.css';
import Footer from '../contactus/Contact';
 
const servicesData = [
  {
    title: 'Unit Testing',
    description:
      'Ensure the reliability of individual components with thorough unit testing, using frameworks like Jest or Mocha.',
    image: 'https://img.freepik.com/free-photo/it-specialist-checking-code-computer-dark-office-night_1098-18699.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
  },
  {
    title: 'Integration Testing',
    description:
      'Verify that different modules or services work together as expected with comprehensive integration tests.',
    image: 'https://img.freepik.com/free-photo/programmer-writes-code-laptop-screen-while-apartment-office-using-java_482257-87273.jpg?ga=GA1.1.1875529303.1722459408',
  },
  {
    title: 'End-to-End Testing',
    description:
      'Simulate real user scenarios to validate the end-to-end functionality of your application, ensuring a seamless user experience.',
    image: 'https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?ga=GA1.1.1875529303.1722459408',
  },
  {
    title: 'Performance Testing',
    description:
      'Assess the performance and scalability of your application under various conditions to ensure it meets performance expectations.',
    image: 'https://img.freepik.com/free-photo/excited-woman-feel-ecstatic-reading-great-online-news-laptop-working-overtime-start-up-company-office-happy-employee-using-modern-technology-network-wireless-studying-writing-searching_482257-13454.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
  },
  {
    title: 'Security Testing',
    description:
      'Identify and address potential security vulnerabilities in your application to safeguard against threats and breaches.',
    image: 'https://img.freepik.com/free-vector/personal-digital-security_74855-4560.jpg?ga=GA1.1.1875529303.1722459408',
  },
];
 
const Testing = () => {
  return (
    <div className="testing-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Testing Services</h1>
          <p>
            Ensure your software is reliable and performs optimally with our comprehensive testing services.
          </p>
        </div>
        <img
          src="https://img.freepik.com/free-vector/personal-digital-security_74855-4560.jpg?ga=GA1.1.1875529303.1722459408"
          alt="Testing Services"
          className="hero-image"
        />
      </header>
 
      <section className="services-section">
        <div className="expertise-description">
          <h3>Main Brief</h3>
          <p>
            Our testing services cover a wide range of testing methodologies to ensure your software is reliable, efficient, and secure. From unit testing to end-to-end testing, we use industry-standard tools and practices to deliver high-quality results.
          </p>
          <h3>Detailed Description</h3>
          <p>
            We offer a comprehensive suite of testing services, including unit testing to validate individual components, integration testing to ensure seamless interaction between modules, and end-to-end testing to simulate real-world usage. Performance testing assesses how well your application performs under various conditions, while security testing identifies and mitigates potential vulnerabilities. Our goal is to provide thorough and reliable testing to ensure your software meets the highest standards of quality and performance.
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
 
export default Testing;