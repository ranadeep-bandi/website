import React, { useState } from 'react';
import './DataDrivenSolution.css';
 
const DataDrivenSolution = () => {
  const [showMore, setShowMore] = useState(false);
 
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
 
  return (
<div className="consultancy-page">
<section className="hero-section">
<div className="hero-content">
<h1>Data-Driven Solutions</h1>
<p>Unlock the full potential of your data with our advanced analytics and data-driven solutions.</p>
</div>
<img
          src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/DataDrivenSolution/Data%20drive%20solutions.jpg?raw=true"
          alt="Data Analysis"
          className="hero-image"
        />
</section>
 
      <section className="section">
<div className="section-content">
<h2>Advanced Analytics</h2>
<p>Transform raw data into actionable insights with our advanced analytics services.</p>
          {showMore && (
<p className="extra-content">
              Our advanced analytics services include predictive analytics, data mining, and statistical analysis. We help you uncover trends, forecast future outcomes, and make data-driven decisions to enhance your business strategies.
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
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/DataDrivenSolution/Pridictive%20analysis.jpg?raw=true"
              alt="Predictive Analytics"
              className="consultancy-image"
            />
</div>
<div className="consultancy-card-content">
<h3>Predictive Analytics</h3>
<p>Utilize statistical models and machine learning algorithms to predict future trends and behaviors.</p>
</div>
</div>
 
        <div className="consultancy-card">
<div className="consultancy-image-wrapper">
<img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/DataDrivenSolution/Data%20Mining.jpg?raw=true"
              alt="Data Mining"
              className="consultancy-image"
            />
</div>
<div className="consultancy-card-content">
<h3>Data Mining</h3>
<p>Extract valuable information from large datasets to uncover patterns and insights.</p>
</div>
</div>
 
        <div className="consultancy-card">
<div className="consultancy-image-wrapper">
<img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/DataDrivenSolution/Statistical%20analysis.jpg?raw=true"
              alt="Statistical Analysis"
              className="consultancy-image"
            />
</div>
<div className="consultancy-card-content">
<h3>Statistical Analysis</h3>
<p>Apply statistical methods to analyze data and derive meaningful conclusions and recommendations.</p>
</div>
</div>
</section>
 
      <section className="section">
<div className="section-content">
<h2>Data Integration and Management</h2>
<p>Seamlessly integrate and manage your data from various sources to ensure accuracy and accessibility.</p>
</div>
</section>
 
      <section className="cards-section">
<div className="consultancy-card">
<div className="consultancy-image-wrapper">
<img
              src="https://img.freepik.com/free-vector/big-data-science-analysis-isometric-composition_1284-54449.jpg?ga=GA1.1.380692511.1722280464&semt=ais_hybrid"
              alt="Data Integration"
              className="consultancy-image"
            />
</div>
<div className="consultancy-card-content">
<h3>Data Integration</h3>
<p>Combine data from disparate sources into a unified view to enhance decision-making and operational efficiency.</p>
</div>
</div>
 
        <div className="consultancy-card">
<div className="consultancy-image-wrapper">
<img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/DataDrivenSolution/Data%20management.jpg?raw=true"
              alt="Data Management"
              className="consultancy-image"
            />
</div>
<div className="consultancy-card-content">
<h3>Data Management</h3>
<p>Ensure data quality, consistency, and governance through effective data management practices.</p>
</div>
</div>
 
        <div className="consultancy-card">
<div className="consultancy-image-wrapper">
<img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/DataDrivenSolution/Business%20intelligance.jpg?raw=true"
              alt="Business Intelligence"
              className="consultancy-image"
            />
</div>
<div className="consultancy-card-content">
<h3>Business Intelligence</h3>
<p>Leverage business intelligence tools to gain insights and make informed strategic decisions.</p>
</div>
</div>
</section>
 
      <section className="section">
<div className="section-content">
<h2>Data Visualization</h2>
<p>Turn complex data into clear and engaging visual representations to facilitate better understanding and decision-making.</p>
</div>
</section>
 
      <section className="cards-section">
<div className="consultancy-card">
<div className="consultancy-image-wrapper">
<img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/DataDrivenSolution/Data_Visualization.jpg?raw=true"
              alt="Data Visualization"
              className="consultancy-image"
            />
</div>
<div className="consultancy-card-content">
<h3>Data Visualization</h3>
<p>Create interactive dashboards and visual reports that make data insights easily accessible and understandable.</p>
</div>
</div>
 
        <div className="consultancy-card">
<div className="consultancy-image-wrapper">
<img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/DataDrivenSolution/DashboardVisual.jpg?raw=true"
              alt="Dashboard Visualization"
              className="consultancy-image"
            />
</div>
<div className="consultancy-card-content">
<h3>Dashboard Visualization</h3>
<p>Design and develop customizable dashboards to track key metrics and performance indicators in real-time.</p>
</div>
</div>
 
        <div className="consultancy-card">
<div className="consultancy-image-wrapper">
<img
              src="https://github.com/Unis-223344/Unis_Website_Dev/blob/main/uweb/public/Unis_Web_Images/DataDrivenSolution/InterActiveCharts.jpg?raw=true"
              alt="Interactive Charts"
              className="consultancy-image"
            />
</div>
<div className="consultancy-card-content">
<h3>Interactive Charts</h3>
<p>Build interactive charts that allow users to explore data dynamically and gain deeper insights.</p>
</div>
</div>
</section>
</div>
  );
};
 
export default DataDrivenSolution;