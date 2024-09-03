// src/components/AndroidDevelopment.js
 
import React from 'react';
import './AndroidDevelopment.css';
import Footer from '../contactus/Contact';
 
const servicesData = [
  {
    title: 'Native Android Development',
    description:
      'Develop robust and high-performance native Android apps using Java or Kotlin, leveraging the full potential of Android SDK.',
    image: 'https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169839.jpg?semt=ais_hybrid',
  },
  {
    title: 'Cross-Platform Development',
    description:
      'Build cross-platform mobile apps with React Native or Flutter, ensuring consistent performance and look across both Android and iOS.',
    image: 'https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169864.jpg?semt=ais_hybrid',
  },
  {
    title: 'App Design & UX',
    description:
      'Create engaging and intuitive user interfaces and experiences for Android apps, focusing on user-centric design principles. Both elements are crucial to a product and work closely together',
    image: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?semt=ais_hybrid',
  },
  {
    title: 'App Testing & Debugging',
    description:
      'Ensure your Android apps are bug-free and perform optimally through rigorous testing and debugging practices.',
    image: 'https://img.freepik.com/free-vector/woman-working-new-app_23-2148682102.jpg?semt=ais_hybrid',
  },
  {
    title: 'App Deployment & Maintenance',
    description:
      'Manage the deployment of your Android apps to the Google Play Store and provide ongoing maintenance and updates.',
    image: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?semt=ais_hybrid',
  },
];
 
const AndroidDevelopment = () => {
  return (
    <div className="android-dev-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Android Development Services</h1>
          <p>
            Elevate your mobile presence with our top-notch Android development solutions.
          </p>
        </div>
        <img
          src="https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5120.jpg?t=st=1722285819~exp=1722289419~hmac=70a88de6745ab25a9ab2e6e9bbcfb437d63ae9dca89fb3e3c2ba23a1dddaaa88&w=740"
          alt="Android Development"
          className="hero-image"
        />
      </header>
 
      <section className="services-section">
        <div className="expertise-description">
          <h3>Main Brief</h3>
          <p>
          Our Android application is designed to provide a robust and engaging experience for mobile users, leveraging native Android development tools and libraries to deliver high performance and seamless functionality on a wide range of devices.
          </p>
          <h3>Detailed Description</h3>
          <p>
          The Android application is developed using Android Studio, the official Integrated Development Environment (IDE) for Android development. It utilizes Java or Kotlin as the primary programming languages to create native applications that fully leverage Android's hardware and software capabilities. The app follows Material Design principles to ensure a modern and consistent user interface. For efficient data management and persistence, SQLite or Room Database is employed, along with integration with Firebase for real-time database and authentication services. The application is thoroughly tested using tools such as Espresso and UI Automator to ensure functionality and performance across different devices and Android versions. Features like push notifications and location services are integrated to enhance user engagement. The app is deployed to the Google Play Store, with regular updates and maintenance to address user feedback and keep the application aligned with the latest Android updates and trends.
          </p>
        </div>
        <div className="cards-container">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
              </div>
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};
 
export default AndroidDevelopment;