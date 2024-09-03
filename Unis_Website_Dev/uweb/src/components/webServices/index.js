import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import { useNavigate } from 'react-router-dom';
 
const servicesData = [
  {
    title: 'IT Consulting Services',
    description:
      'Leverage expert IT consulting services to optimize your technology strategies and achieve your business goals with tailored solutions.',
    image: 'https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241261.jpg?ga=GA1.1.380692511.1722280464&semt=ais_hybrid',
    path: '/services/IT-Consulting',
  },
  {
    title: 'App Development',
    description:
      'Build robust, scalable, and secure applications that meet your business needs using the latest technologies and methodologies.',
    image: 'https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?ga=GA1.1.380692511.1722280464&semt=ais_hybrid',
    path: '/services/AppDevelop',
  },
  {
    title: 'Data Driven Solutions',
    description:
      'Harness the power of data to drive informed decisions, optimize processes, and gain a competitive edge with our data-driven solutions.',
    image: 'https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18141.jpg?ga=GA1.1.380692511.1722280464',
    path: '/services/Data-Driven',
  },
  {
    title: 'Advanced AI Solutions',
    description:
      'Implement advanced AI solutions to automate tasks, enhance decision-making, and create innovative products and services.',
    image: 'https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524399.jpg?ga=GA1.1.380692511.1722280464&semt=ais_hybrid',
    path: '/services/Advanced-AI',
  },
  {
    title: 'BA Services',
    description:
      'Our Business Analysis services ensure your projects align with business objectives and deliver the expected value.',
    image: 'https://img.freepik.com/free-photo/business-partners-working-together-modern-office_9975-22939.jpg?ga=GA1.1.380692511.1722280464&semt=ais_hybrid',
    path: '/services/BA-Services',
  },
  {
    title: 'Cloud Solutions',
    description:
      'Utilize cloud solutions to improve scalability, security, and collaboration, while reducing costs and increasing efficiency.',
    image: 'https://img.freepik.com/free-photo/hand-touching-tablet_1134-426.jpg?ga=GA1.1.380692511.1722280464&semt=ais_hybrid',
    path: '/services/Cloud-Solutions',
  },
  {
    title: 'EduTechPro Solutions',
    description:
      'Empower education with innovative EduTechPro solutions that enhance learning experiences and outcomes for institutions and learners.',
    image: 'https://img.freepik.com/free-vector/illustration-light-bulb-ideas_53876-18149.jpg?ga=GA1.1.380692511.1722280464&semt=ais_hybrid',
    path: '/services/EduTechPro',
  },
];
 
const WebServices = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1600,
    arrows: false, // Disable arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
 
  return (
    <div className="services-section">
      <h2>Our Services</h2>
      <Slider {...settings} className="cards-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index} onClick={() => navigate(service.path)}>
            <div className="image-wrapper">
              <img src={service.image} alt={service.title} className="service-image" />
            </div>
            <div className="card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
 
export default WebServices;