import React from 'react';
import './Contact.css';
import {
  FaFacebookF,
  
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt
  
} from 'react-icons/fa';
import { GrInstagram } from "react-icons/gr";
import { Link } from 'react-router-dom';
 
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <img
            className="footer-logo"
            src="https://i.ibb.co/qJ6GCND/unis.png"
            alt="Logo"
          />
        </div>
 
        <div className="footer-contact-section">
          <h2>Contact Us</h2>
          <p>
            <FaEnvelope className="footer-icon" />{' '}
            <a href="mailto:info@unistechnosoft.com">info@unistechnosoft.com</a>
            
            
          </p>
          <p>
            <FaPhoneAlt className="footer-icon" /> Contact No: +91 4067435565
          </p>
          <div className="social-icons" style={{display:'flex',justifyContent:'center',width:'100%',style:'white'}}>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className='icon-color' />
            </a>
            <a
              href="https://www.instagram.com/unistechno_soft/"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrInstagram className='icon-color'/>
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className='icon-color'/>
            </a>
          </div>
          <p>
            At Unis Technosoft, we deliver reliable, innovative solutions that
            help your business thrive in the digital age.
          </p>
        </div>
 
        <div className="footer-address-section">
          <h2>Our Address</h2>
          <p>
          4th Floor, Plot No: 6,Balaji Empire, Jayabheri Enclave,Gachibowli, Hyderabad - 500032.
          </p>
          <h2>Hours of Operation</h2>
          <p>Monday - Friday: 10:00 AM - 06:00 PM</p>
          
        </div>
 
      </div>
 
      <div className="footer-bottom">
        <hr />
        <p style={{fontSize:'15px'}}>&copy; 2024 Unis Technosoft. All rights reserved.</p>
      </div>
    </footer>
  );
}
 
export default Footer;