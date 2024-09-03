import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../contactus/Contact'
import './ContactUs.css'; // Ensure this path is correct
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { GrInstagram } from "react-icons/gr";

const Contact = () => {
  const form = useRef();
  const [popupVisible, setPopupVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fhvw8j8', 'template_qqaioem', form.current, 'oTV48EkYs2tJ01GX_')
      .then(
        () => {
          setPopupVisible(true);
          setTimeout(() => setPopupVisible(false), 3000);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-info-container">
        <div className="contact-info-left">
          <div className="contact-info-card contact-info-section">
            <h2>Get in Touch</h2>
            <p><FaEnvelope className="contact-icon" /> <a href="mailto:info@unistechnosoft.com">info@unistechnosoft.com</a></p>
            <p><FaPhoneAlt className="contact-icon" /> Contact No: +91 4067435565</p>
            <div className="social-icons">
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/unistechno_soft/" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <GrInstagram />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
            </div>
          </div>
          <div className="contact-info-card contact-address">
            <h2>Our Address</h2>
            <p> 4th Floor, Plot No: 6,Balaji Empire, Jayabheri Enclave,Gachibowli, Hyderabad - 500032.</p>
            <h2>Hours of Operation</h2>
            <p>Monday - Friday: 10:00 AM - 06:00 PM</p>
          </div>
        </div>

        <div className="contact-info-right">
          <div className="contact-info-card">
            <h2>Send Message</h2>
            <form ref={form} onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="user_name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="user_email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>

              <input type="submit" value="Send Message" />
            </form>
          </div>
        </div>
      </div>

      {popupVisible && (
        <div className="popup">
          <p>Your message has been sent successfully!</p>
        </div>
      )}
      {/* <Footer/> */}
    </div>
  );
};

export default Contact;
