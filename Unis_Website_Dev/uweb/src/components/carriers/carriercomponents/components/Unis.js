import React from 'react';
import './css/unis.css';
import { Link } from 'react-router-dom';
 
function Unis() {
  return (
    <div className="Unis">
      <div className="container1">
        <h1>Optimize Your Recruitment with Our Tailored Hiring Solutions</h1>
        <div className="steps1">
          <div className="step1">
            <div className="step-number1">1</div>
            <div className="step-content1">
              <h2>Comprehensive Requirements Gathering</h2>
              <p>Collect and analyze resumes to curate a strong pool of potential candidates.</p>
            </div>
            <img src="https://github.com/Unis-223344/Unis_Webiste_Images/blob/main/Careers/Resume.png?raw=true" alt="Resume Collection" className="step-image1" />
          </div>
 
          <div className="step1">
            <div className="step-number1">2</div>
            <div className="step-content1">
              <h2>Strategic Candidate Evaluation</h2>
              <p>Review and shortlist candidates based on their qualifications and overall fit.</p>
            </div>
            <img src="https://github.com/Unis-223344/Unis_Webiste_Images/blob/main/Careers/Profile.png?raw=true" alt="Candidate Evaluation" className="step-image1" />
          </div>
 
          <div className="step1">
            <div className="step-number1">3</div>
            <div className="step-content1">
              <h2>Rigorous Selection Process</h2>
              <p>Conduct thorough assessments to ensure candidates meet your skill requirements.</p>
            </div>
            <img src="https://github.com/Unis-223344/Unis_Webiste_Images/blob/main/Careers/Selection.png?raw=true" alt="Candidate Selection" className="step-image1" />
          </div>
 
          <div className="step1">
            <div className="step-number1">4</div>
            <div className="step-content1">
              <h2>Efficient Onboarding Preparation</h2>
              <p>Finalize offers and smoothly transition selected candidates into your organization.</p>
            </div>
            <img src="https://github.com/Unis-223344/Unis_Webiste_Images/blob/main/Careers/MatchImage.png?raw=true" alt="Onboarding Preparation" className="step-image1" />
          </div>
        </div>
        <Link to ="/ContactUs">
        <button className="contact-button">Get in Touch</button>
        </Link>
        <p className="footer-text">Become a part of our success story. Join us today!</p>
      </div>
    </div>
  );
}
 
export default Unis;