import React from 'react';
import '../components/css/JobCards.css';
 
const DeveloperCard = ({ title, description, image }) => (
  <div className="developer-card-001">
    <img src={image} alt={`${title} icon`} />
    <div className="card-content-001">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);
 
const careerCards = () => (
  <div className="home-page-001">
    <h1 className='join-001'>Join Our Team</h1>
    <p className='aboutTeamText-001'>
      Discover exciting career opportunities and become a part of our innovative team. We are looking for talented individuals to help drive our mission forward. Explore the roles below and find where you fit best!
    </p>
    <div className="developer-cards-001">
      {developers.map((developer, index) => (
        <DeveloperCard key={index} {...developer} />
      ))}
    </div>
  </div>
);
 
const developers = [
  {
    title: "Gen AI",
    description: "AI-powered solution providing intelligent automation and insights for enhanced efficiency.",
    image: "https://github.com/Unis-223344/Unis_Webiste_Images/blob/main/Careers/backenddeveloper.jpg?raw=true",
  },
  {
    title: "LLM Engineer",
    description: "Expert in designing, optimizing, and deploying large language models for advanced AI applications.",
    image: "https://github.com/Unis-223344/Unis_Webiste_Images/blob/main/Careers/frontend.jpg?raw=true",
  },
  {
    title: "MERN & MEAN Stack",
    description: "MEAN Stack uses MongoDB, Express.js, Angular, and Node.js, while MERN Stack replaces Angular with React, focusing on a more component-based approach for building user interfaces in dynamic, JavaScript-based web applications.",
    image: "https://github.com/Unis-223344/Unis_Webiste_Images/blob/main/Careers/ul%20ux%20desinger.jpg?raw=true",
  },
  {
    title: "Prompt Engineer",
    description: "A Prompt Engineer designs and optimizes prompts for AI models to elicit accurate, relevant, and useful responses, enhancing the model's performance and user interaction.",
    image: "https://github.com/Unis-223344/Unis_Webiste_Images/blob/main/Careers/fullstack.jpg?raw=true",
  },
  {
    title: "Data Scientist",
    description: "Analyze and interpret complex data to help businesses make informed decisions using Python, R, and SQL.",
    image: "https://github.com/Unis-223344/Unis_Webiste_Images/blob/main/Careers/Data%20Scientist.jpg?raw=true",
  },
  {
    title: "Systems Engineer",
    description: "A Systems Engineer designs, integrates, and manages complex systems, ensuring they function efficiently and meet all technical and operational requirements.",
    image: "https://github.com/Unis-223344/Unis_Webiste_Images/blob/main/Careers/software%20engineer.jpg?raw=true",
  },
  {
    title: "Database Engineer",
    description: "Design, implement, and manage database systems ensuring data integrity and security using SQL, NoSQL, and database management tools.",
    image: "https://github.com/Unis-223344/Unis_Webiste_Images/blob/main/Careers/database%20engineer.jpg?raw=true",
  },
  {
    title: "DevOps Engineer",
    description: "Automate and optimize infrastructure, manage CI/CD pipelines, and ensure system reliability and scalability using tools like Docker, Kubernetes, and Jenkins.",
    image: "https://github.com/Unis-223344/Unis_Webiste_Images/blob/main/Careers/devops%20engineer.jpg?raw=true",
  },
  {
    title: "Cloud Engineer",
    description: "Design and manage cloud infrastructure, deploy applications, and ensure cloud resource optimization using platforms like AWS, Azure, or Google Cloud.",
    image: "https://github.com/Unis-223344/Unis_Webiste_Images/blob/main/Careers/cloud%20engineering.jpg?raw=true",
  },
  {
    title: "Machine Learning Engineer",
    description: "Build and deploy machine learning models and algorithms to solve complex problems and drive data-driven decisions using TensorFlow, PyTorch, and other ML tools.",
    image: "https://github.com/Unis-223344/Unis_Webiste_Images/blob/main/Careers/machine%20learning.jpg?raw=true",
  },
];
 
export default careerCards;