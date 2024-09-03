import './DataScience.css';
import Footer from '../contactus/Contact'; 

// src/components/DataScience.js
 
import React from 'react';
import './DataScience.css';
 
const servicesData = [
  {
    title: 'Data Analysis',
    description:
      'Extract valuable insights from data through statistical analysis and data visualization techniques.',
    image: 'https://img.freepik.com/free-photo/business-data-analysis_53876-95296.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
  },
  {
    title: 'Machine Learning',
    description:
      'Develop predictive models and algorithms to enable data-driven decision-making using machine learning techniques.',
    image: 'https://img.freepik.com/free-vector/man-robot-with-computers-sitting-together-workplace-artificial-intelligence-workforce-future-flat-illustration_74855-20635.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
  },
  {
    title: 'Data Visualization',
    description:
      'Create interactive and visually appealing data visualizations to communicate findings effectively.',
    image: 'https://img.freepik.com/free-photo/business-person-looking-finance-graphs_23-2150461348.jpg?ga=GA1.1.1875529303.1722459408',
  },
  {
    title: 'Big Data Processing',
    description:
      'Handle large volumes of data efficiently using distributed computing frameworks and tools.',
    image: 'https://img.freepik.com/free-vector/server-room-big-data-cloud-computing-artificial-intelligence-ai-processing-data-database_39422-934.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
  },
  {
    title: 'Predictive Analytics',
    description:
      'Utilize statistical techniques to forecast future trends and behaviors based on historical data.',
    image: 'https://img.freepik.com/free-photo/freelancer-woman-comparing-graphics-from-clipboard-with-grafics-from-computer-business-office_482257-5156.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
  },
];
 
const DataScience = () => {
  return (
    <div className="data-science-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Data Science Services</h1>
          <p>
            Harness the power of data with our comprehensive data science solutions that drive actionable insights and strategic decisions.
          </p>
        </div>
        <img
          src="https://img.freepik.com/free-vector/big-data-analytics-abstract-concept-illustration_335657-3734.jpg?t=st=1722286039~exp=1722289639~hmac=a33da4213cd422997b5504801500fb89218ad8dba61bcb4f20164959424e9659&w=740"
          alt="Data Science"
          className="hero-image"
        />
      </header>
 
      <section className="services-section">
        <div className="expertise-description">
          <h3>Main Brief</h3>
          <p>
            Our data science services provide in-depth analysis and predictive insights to help your business make informed decisions. We use advanced techniques and tools to process and analyze data, create visualizations, and build models that drive business growth.
          </p>
          <h3>Detailed Description</h3>
          <p>
            We offer a range of data science services including data analysis, machine learning, and data visualization. Our expertise in handling big data ensures efficient processing and accurate results. Predictive analytics helps in forecasting future trends, allowing businesses to stay ahead of the competition. Our goal is to leverage data to deliver actionable insights and support strategic decision-making.
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
 
export default DataScience;
 
 