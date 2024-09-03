
import Footer from '../contactus/Contact';
 
import React from 'react';
import './BusinessAnalyst.css';
 
const servicesData = [
  {
    title: 'Data Analysis',
    description:
      'Transform raw data into actionable insights using statistical methods and data visualization techniques.',
    image: 'https://img.freepik.com/free-vector/data-inform-illustration-concept_114360-864.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
  },
  {
    title: 'Business Intelligence',
    description:
      'Utilize BI tools to provide comprehensive data analysis and reporting to guide strategic decision-making.',
    image: 'https://img.freepik.com/free-vector/flat-hand-drawn-multitask-business-woman-illustrated_23-2148855946.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
  },
  {
    title: 'Market Research',
    description:
      'Conduct thorough market research to understand market trends, customer needs, and competitive landscape.',
    image: 'https://img.freepik.com/free-vector/officer-fnancial-audit-business-analysis-market-research-product-testing-data-analysis-concept-business-operation-audit-online-service-isolated-flat-vector-illustration_1150-55446.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
  },
  {
    title: 'Requirements Gathering',
    description:
      'Collect and document business requirements to ensure that the solutions developed align with business goals.',
    image: 'https://img.freepik.com/free-photo/smiling-diverse-businesswomen-shake-hands-group-meeting-deal-concept_1163-4686.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
  },
  {
    title: 'Process Improvement',
    description:
      'Analyze and enhance business processes to increase efficiency, productivity, and overall performance.',
    image: 'https://img.freepik.com/free-photo/career-skills-progress-graphic-icon-symbol_53876-124007.jpg?ga=GA1.1.1875529303.1722459408&semt=ais_hybrid',
  },
];
 
const BusinessAnalyst = () => {
  return (
    <div className="business-analyst-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Business Analyst Services</h1>
          <p>
            Drive business success with strategic insights and data-driven decision-making. Our business analyst services help you understand market trends, customer needs, and process efficiencies.
          </p>
        </div>
        <img
          src="https://img.freepik.com/free-vector/stocktaking-process-financial-operation-tax-reporting-management-software-enterprise-program-woman-doing-bookkeeping-auditing-cartoon-character-vector-isolated-concept-metaphor-illustration_335657-2739.jpg?t=st=1722287030~exp=1722290630~hmac=d154cf1ea634774cf61bd845397c6f7e37078990d1e0d20f82b03fe281b4898a&w=740"
          alt="Business Analyst"
          className="hero-image"
        />
      </header>
 
      <section className="services-section">
        <div className="expertise-description">
          <h3>Main Brief</h3>
          <p>
            Our Business Analyst services empower your organization to make informed decisions and drive growth. We leverage data and market insights to identify opportunities, optimize processes, and enhance strategic planning.
          </p>
          <h3>Detailed Description</h3>
          <p>
            Our team provides comprehensive data analysis, business intelligence, market research, requirements gathering, and process improvement services. We utilize advanced analytics and BI tools to turn complex data into actionable insights. By conducting thorough market research and gathering precise requirements, we help you align solutions with business goals and drive continuous improvement. Our approach ensures that you have a clear understanding of market trends and operational efficiencies to make data-driven decisions that enhance overall performance.
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
 
export default BusinessAnalyst;