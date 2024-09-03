import React from 'react';
import './Home.css';
import Message from '../message/Message'

import VideoBg from '../VideoBg';
import WebServices from '../webServices';
import Marquee from 'react-fast-marquee';
// import VideoBg2 from '../VideoBg2';
import { Link } from 'react-router-dom';
import ContactUs from '../cont/ContactUs';
import ScrollButton from '../../newComponents/scrollbutton/ScrollButton';


// Sample data for icon cards
const services = [
  {
    title: "IT Consulting Services",
    description: "Empowering your business with tailored IT solutions, driving efficiency, and innovation to help you stay ahead in a rapidly evolving digital landscape.",
    icon: "🌐",
    iconColor: "#3498db",
    backgroundImage: "https://i.postimg.cc/5Nrf2SFw/earth-Img.jpg"
  },
  {
    title: "Product Development",
    description: "Transforming ideas into powerful products with cutting-edge development, delivering solutions that drive growth and set your business apart.",
    icon: "📱",
    backgroundImage: "https://i.postimg.cc/YS678cD3/Product-Development.jpg"
  },
  {
    title: "Data Analytics & Data Science",
    description: "Unlock actionable insights and drive smart decisions with advanced data analytics and data science, turning your data into a competitive advantage.",
    icon: "📊",
    backgroundImage: "https://i.postimg.cc/wx06Spq4/Data-Analytics-Data-Science.jpg"
  },
  {
    title: "Machine Learning & AI",
    description: "Leverage the power of Machine Learning and AI to automate, innovate, and propel your business into the future with intelligent, data-driven solutions.",
    icon: "🤖",
    backgroundImage: "https://i.postimg.cc/pdbxDVCr/Machine-Learning-AI.png"
  },
  {
    title: "EduTechPro Solutions",
    description: "Revolutionizing education with innovative EduTech solutions, enhancing learning experiences and empowering institutions to achieve academic excellence.",
    icon: "📚",
    backgroundImage: "https://i.postimg.cc/gkjYpTrz/Edu-Tech-Pro-Solutions.jpg"
  }
];

// Sample testimonials data
const testimonials = [
  {
    quote: "Unistechnosoft provided exceptional service and transformed our business.",
    author: "John Doe, CEO of ABC Corp"
  },
  {
    quote: "Their innovative solutions have improved our workflow tremendously.",
    author: "Jane Smith, CTO of XYZ Ltd"
  },
  {
    quote: "A team of true professionals who understand our needs.",
    author: "David Brown, Founder of StartUp Inc"
  }
];

// const galleryImages = [
//   "https://img.freepik.com/premium-photo/trees-growing-forest_1048944-30368869.jpg?t=st=1723241354~exp=1723241954~hmac=665ea0ff97bad961d403aca5eb3f5719a1a88a88756056126f7699321da24b5d",
//   "https://img.freepik.com/free-photo/full-shot-family-running-meadow_23-2149049202.jpg?t=st=1723241354~exp=1723241954~hmac=d2a3615d3f0d76fc6ba6d69983cc1a21b508cf1aea01293ec8b21de13063dc3a",
//   "https://img.freepik.com/free-photo/full-shot-family-running-meadow_23-2149049202.jpg?t=st=1723241354~exp=1723241954~hmac=d2a3615d3f0d76fc6ba6d69983cc1a21b508cf1aea01293ec8b21de13063dc3a",


// ];

// Sample team members data
const teamMembers = [
  {
    name: "Alice Johnson",
    role: "CEO",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Bob Williams",
    role: "CTO",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Catherine Lee",
    role: "Project Manager",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Daniel Kim",
    role: "Lead Developer",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Emma Davis",
    role: "Marketing Head",
    image: "https://via.placeholder.com/100"
  }
];

function Home() {

  return (
    <div className="unis two">

      <VideoBg className="goTop" />

      {/* Icon Cards Section */}
      <div className="icon-cards-section">
        <h2 className='Etext01'>Engage Our Expertise</h2>
        <div className="icon-cards-container">
          {services.map((service, index) => (
            <div
              className={`icon-card ${index % 2 === 0 ? 'first-card' : 'side-card'}`}
              key={index}
              style={{ backgroundImage: `url(${service.backgroundImage})` }}
            >
              <div className="icon-image" style={{ color: service.iconColor }}>
                {service.icon}
              </div>
              <h3 id='clrs'>{service.title}</h3>
              <p id='decr'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Services Section */}
      {/* <h1 className='text1'>Our Services</h1> */}
      {/* <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        direction="right"
      > */}
        <WebServices />
      {/* </Marquee> */}

      {/* Second Video Background */}
      <div className="video-container">
        <video className="video-background" autoPlay muted loop>
          <source src="VideosProp/144584-785095786_small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay-text">
          <h1>Unis Technosoft</h1>
          <p >At UNIS TECHNOSOFT PRIVATE LIMITED, we are dedicated to transforming businesses through innovative IT solutions. Established with a vision to deliver top-notch technology services, our team of experienced professionals is committed to helping clients navigate the ever-evolving digital landscape. We pride ourselves on our client-centric approach, ensuring that each solution is tailored to meet the unique needs and objectives of our clients.</p>
        </div>
      </div>
      <Link to='/ContactUs' style={{ textDecoration: 'none' }}><h1 className='btng'>Let's Build the Future Together—Get in Touch with Us Today!</h1></Link>





      {/* Organization Futures Section */}
      {/* <div className="unisHome">

        <div className="box2" >
          <img className="imageCrop" src='https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/Home/Media1.jpg?raw=true' alt="Our Organisation Futures" />
        </div>
      </div> */}



      {/* Organization Blogs Section */}
      <div className="unisHome">
        <div className="box1" >
          <h1 className='headOr'>Our Organisation Blogs</h1>
          <span className='briefHead newHeading' style={{ width: '600px', margin: 'auto' }}>
            At <span className='titleMain addHead'>UNIS TECHNOSOFT PRIVATE LIMITED</span>, we are dedicated to transforming businesses through innovative IT solutions. Established with a vision to deliver top-notch technology services, our team of experienced professionals is committed to helping clients navigate the ever-evolving digital landscape. We pride ourselves on our client-centric approach, ensuring that each solution is tailored to meet the unique needs and objectives of our clients.
          </span>

        </div>
        <div className="box2">
          <div className="background-video-container1">
            <video autoPlay muted loop className="background-video1">
              <source src="VideosProp/Blog_Video_01.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="overlay1"></div>
          </div>        </div>
      </div>


      <Message />

    </div>
  );
}

export default Home;
