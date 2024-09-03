import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Message.css'; // Updated CSS file path

const Message = () => {
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
    // <div className='mains'>
    //     <h2>Contact Us</h2>
    
    <div className="new-contact-info" >
         
         <div className="company-info-card">
         <h3 style={{color: 'rgba(9, 9, 121, 1)', fontSize:'1.5rem', fontWeight:'500'}}>Reach Out to Us for Project Planning</h3>
  <p>
    Whether you're looking to start a new project or enhance an existing one, our team is here to help. We offer comprehensive planning services to ensure your project is a success from start to finish. Our expert consultants will work with you to understand your goals, outline a clear strategy, and provide the support you need to bring your vision to life.
  </p>
  <p>
    Contact us today to discuss your project needs and explore how we can assist in turning your ideas into reality. Fill out the form on the right, and we'll get back to you with tailored solutions and a detailed plan to guide you through the process.
  </p>
  <p className="info-note">
    For discussing and sharing information, please fill out the form on the right.
    <span className="arrow-icon">➔</span>
  </p>
</div>


      <div className="new-contact-form-card">
       
        <form ref={form} onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-inline">
              <div className="form-field">
                <label htmlFor="name"style={{color: 'rgba(9, 9, 121, 1)', fontSize:'1rem', fontWeight:'600'}}>Name</label>
                <input type="text" id="name" name="user_name" required />
              </div>
              <div className="form-field">
                <label htmlFor="email"style={{color: 'rgba(9, 9, 121, 1)', fontSize:'1rem', fontWeight:'600'}}>Email</label>
                <input type="email" id="email" name="user_email" required />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="message"style={{color: 'rgba(9, 9, 121, 1)', fontSize:'1rem', fontWeight:'600'}}>Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
          </div>
          <input type="submit" value="Send Message" />
        </form>
      </div>

      {popupVisible && (
        <div className="new-popup">
          <p>Your message has been sent successfully!</p>
        </div>
      )}
    </div>
   
  );
};

export default Message;
