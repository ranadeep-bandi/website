import React from 'react';
import './Blog.css';
import Footer from '../contactus/Contact';
import BlogsCards from '../blogCards';
import ScrollButton from '../../newComponents/scrollbutton/ScrollButton';
 
const Blog = () => {
  return (
    
    <div className="blog-container">
      {/* Section with image and paragraph */}
      <div className='box10'>

      <div className="image-with-text">
        <img src="https://img.freepik.com/free-photo/corporate-workers-brainstorming-together_23-2148804492.jpg?ga=GA1.1.380692511.1722280464&semt=ais_hybrid" alt="Placeholder" className="main-image" />
      </div>

      <div className='box11'>
        <h1 className='head6'>Unis Blog </h1>
        <p>Welcome to the Unis Technosoft blog, your go-to source for insights on the latest trends in technology and innovation. Here, we share expert perspectives, project highlights, and industry news to keep you informed and inspired. Dive into our success stories, learn from our experiences, and stay updated with the cutting-edge solutions we deliver. Join us as we explore the dynamic world of IT and how it shapes the future of business. </p>
      </div>

      </div>
 
      {/* Grid of cards */}
      <BlogsCards />

    {/* <Footer/> */}
    </div>
    
  );
};
 
export default Blog;