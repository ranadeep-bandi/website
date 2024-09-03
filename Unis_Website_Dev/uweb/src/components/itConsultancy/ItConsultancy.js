// src/components/ITConsultancy.js
 
import React from 'react';
import './ItConsultancy.css';
import Footer from '../contactus/Contact';
 
const servicesData = [
  {
    title: 'IT Strategy',
    description:
      'Develop comprehensive IT strategies to align technology with business goals and drive digital transformation.',
    image: 'https://img.freepik.com/free-photo/innovation-strategy-creativity-brainstorming-concept_53876-133938.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
  },
  {
    title: 'Technology Assessment',
    description:
      'Assess and evaluate existing technology infrastructure to recommend improvements and optimize performance.',
    image: 'https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
  },
  {
    title: 'IT Governance',
    description:
      'Implement IT governance frameworks to ensure effective management and alignment with organizational objectives.',
    image: 'https://img.freepik.com/free-photo/enter-internet-computer-privacy-system-protection-concept_53876-139706.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
  },
  {
    title: 'Cybersecurity Consulting',
    description:
      'Protect your business from cyber threats with expert cybersecurity consulting and risk management strategies.',
    image: 'https://img.freepik.com/free-photo/script-running-computer-secret-base-operations-used-by-hacker_482257-88615.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
  },
  {
    title: 'Cloud Solutions',
    description:
      'Optimize your cloud infrastructure and migrate applications seamlessly with our cloud solutions consulting.',
    image: 'https://img.freepik.com/free-photo/saas-concept-collage_23-2149399281.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
  },
];
 
const ItConsultancy = () => {
  return (
    <div className="it-consultancy-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>IT Consultancy Services</h1>
          <p>
            Enhance your technology strategy with expert IT consultancy services. We provide tailored solutions to help you navigate technology challenges and achieve your business goals.
          </p>
        </div>
        <img
          src="https://img.freepik.com/free-vector/flat-design-illustration-web-developers_23-2148817995.jpg?t=st=1722287239~exp=1722290839~hmac=e26c0165ab7e95db82ab96064efbeb6f64fdbc88057698e5d12c967ca24ea221&w=740"
          alt="IT Consultancy"
          className="hero-image"
        />
      </header>
 
      <section className="services-section">
        <div className="expertise-description">
          <h3>Main Brief</h3>
          <p>
            Our IT Consultancy services are designed to help organizations harness the power of technology to drive growth and innovation. We offer expert advice and solutions to optimize your IT strategy and infrastructure.
          </p>
          <h3>Detailed Description</h3>
          <p>
            We provide a range of consultancy services including IT strategy development, technology assessment, IT governance, cybersecurity consulting, and cloud solutions. Our approach ensures that your technology investments align with your business objectives and deliver maximum value. From assessing your current technology landscape to implementing effective IT governance frameworks and enhancing cybersecurity measures, our team is dedicated to guiding you through every aspect of your IT journey. With our cloud solutions expertise, we also help you optimize cloud infrastructure and manage cloud migrations effectively.
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
 
export default ItConsultancy;