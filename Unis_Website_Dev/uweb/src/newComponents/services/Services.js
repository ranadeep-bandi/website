import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'IT Consulting Services',
      description: 'Expert guidance to optimize your IT infrastructure and align it with your business goals. Our team ensures that your IT strategy is in line with your overall business objectives, helping you achieve greater efficiency and innovation.',
      path: '/services/IT-Consulting',
    },
    {
      title: 'Application Development',
      description: 'Custom application development services tailored to meet your business needs. We deliver scalable and robust applications that enhance your business processes and customer experience, driving growth and success.',
      path: '/services/AppDevelop',
    },
    {
      title: 'Data Driven Solutions',
      description: 'Unlock the power of data with our comprehensive data-driven solutions. Our experts help you harness data to make informed decisions, optimize operations, and discover new opportunities for growth.',
      path: '/services/Data-Driven',
    },
    {
      title: 'Advanced AI Solutions',
      description: 'Leverage AI to drive innovation and gain a competitive edge in your industry. We provide AI-driven solutions that transform your data into actionable insights, enabling smarter decisions and automation.',
      path: '/services/Advanced-AI',
    },
    {
      title: 'BA Services',
      description: 'Business analysis services to streamline processes and enhance decision-making. Our BA experts work closely with your team to identify inefficiencies, optimize workflows, and implement effective solutions.',
      path: '/services/BA-Services',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud solutions to accelerate your digital transformation. We help you migrate to the cloud seamlessly, ensuring that your data is secure and your operations are efficient.',
      path: '/services/Cloud-Solutions',
    },
    {
      title: 'EduTechPro Solutions',
      description: 'Innovative educational technology solutions to empower learning and development. Our solutions are designed to enhance the learning experience, making education more accessible, engaging, and effective.',
      path: '/services/EduTechPro',
    },
  ];

  return (
    <div className="services-container9">
        <div className="simple-card9">
            <h1 style={{color:'white'}}>Our Services</h1>
            <p className="services-description9">
                At UNIS TECHNOSOFT PRIVATE LIMITED, we are committed to providing top-tier services that drive innovation, efficiency, and growth for your business. Explore our diverse range of services designed to meet the unique needs of our clients across various industries.
            </p>
        </div>
        <div className="services-grid9">
            {services.map((service, index) => (
                <div key={index} className="card9" onClick={() => navigate(service.path)}>
                    <p className="card-title9">{service.title}</p>
                    <p className="small-desc9">{service.description}</p>
                    <div className="go-corner9">
                        <div className="go-arrow9">→</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Services;