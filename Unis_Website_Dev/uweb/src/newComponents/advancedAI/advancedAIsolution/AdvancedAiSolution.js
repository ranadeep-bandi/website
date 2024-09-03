import React, { useState } from 'react';
import './AdvancedAiSolution.css';
 
const AdvancedAiSolution = () => {
  const [showMore, setShowMore] = useState(false);
 
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
 
  return (
    <div className="consultancy-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Advanced AI Solutions</h1>
          <p>Empower your business with cutting-edge AI technologies and intelligent solutions.</p>
        </div>
        <img
          src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/Advance%20ai%20solutions/Advanced%20ai%20solutions.jpg?raw=true"
          alt="Artificial Intelligence"
          className="hero-image"
        />
      </section>
 
      <section className="section">
        <div className="section-content">
          <h2>Machine Learning Models</h2>
          <p>Develop and deploy machine learning models tailored to your specific business needs.</p>
          {showMore && (
            <p className="extra-content">
              Our machine learning solutions include model development, training, and deployment. We use advanced algorithms to help you predict trends, automate processes, and make data-driven decisions. Whether it's supervised, unsupervised, or reinforcement learning, our expertise ensures optimal results.
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
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/Advance%20ai%20solutions/Machine%20Learning.jpg?raw=true"
              alt="Machine Learning"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Machine Learning</h3>
            <p>Build predictive models that drive business insights and automate decision-making processes.</p>
          </div>
        </div>
 
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/Advance%20ai%20solutions/deep%20learning.jpg?raw=true"
              alt="Deep Learning"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Deep Learning</h3>
            <p>Leverage neural networks to achieve advanced pattern recognition and complex problem-solving capabilities.</p>
          </div>
        </div>
 
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/Advance%20ai%20solutions/naturallanguageprocessing.jpg?raw=true"
              alt="Natural Language Processing"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Natural Language Processing</h3>
            <p>Enhance interactions with AI-driven language understanding and generation for chatbots and virtual assistants.</p>
          </div>
        </div>
      </section>
 
      <section className="section">
        <div className="section-content">
          <h2>AI-Powered Automation</h2>
          <p>Streamline operations and improve efficiency with intelligent automation solutions.</p>
        </div>
      </section>
 
      <section className="cards-section">
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/Advance%20ai%20solutions/Robotic%20process%20automation.jpg?raw=true"
              alt="Robotic Process Automation"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Robotic Process Automation</h3>
            <p>Automate repetitive tasks and business processes to increase efficiency and reduce operational costs.</p>
          </div>
        </div>
 
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/Advance%20ai%20solutions/Intelligence%20automation.jpg?raw=true"
              alt="Intelligent Automation"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>Intelligent Automation</h3>
            <p>Combine AI and automation to optimize workflows, enhance decision-making, and drive business value.</p>
          </div>
        </div>
 
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/Advance%20ai%20solutions/AI%20chatbot.jpg?raw=true"
              alt="AI Chatbots"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>AI Chatbots</h3>
            <p>Implement AI-powered chatbots to provide instant customer support and enhance user engagement.</p>
          </div>
        </div>
      </section>
 
      <section className="section">
        <div className="section-content">
          <h2>AI Insights and Analytics</h2>
          <p>Gain actionable insights from your data with AI-driven analytics and reporting tools.</p>
        </div>
      </section>
 
      <section className="cards-section">
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/Advance%20ai%20solutions/AI%20Insight.jpg?raw=true"
              alt="AI Insights"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>AI Insights</h3>
            <p>Leverage AI to analyze data trends and patterns, providing actionable insights to drive strategic decisions.</p>
          </div>
        </div>
 
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/Advance%20ai%20solutions/AI%20Reporting.jpg?raw=true"
              alt="AI Reporting"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>AI Reporting</h3>
            <p>Generate comprehensive and dynamic reports with AI, facilitating better monitoring and performance evaluation.</p>
          </div>
        </div>
 
        <div className="consultancy-card">
          <div className="consultancy-image-wrapper">
            <img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/Advance%20ai%20solutions/AI%20Data%20visualization.jpg?raw=true"
              alt="AI Data Visualization"
              className="consultancy-image"
            />
          </div>
          <div className="consultancy-card-content">
            <h3>AI Data Visualization</h3>
            <p>Create advanced data visualizations with AI tools, enhancing understanding and communication of complex data.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
 
export default AdvancedAiSolution;