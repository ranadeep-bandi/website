import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css';

import AndroidDevelopment from './components/androidDevelopment/AndroidDevelopment';
import BusinessAnalyst from './components/ba/BusinessAnalyst';
import Carriers from './components/carriers/Carriers';
import Footer from './components/contactus/Contact';
import DataScience from './components/dataScience/DataScience';
import Devops from './components/devops/Devops';
import Home from './components/home/Home';
import ItConsultancy from './components/itConsultancy/ItConsultancy';
import Testing from './components/testing/Testing';
import WebApplication from './components/webApplication/WebApplication';
import Blog from './components/blog/Blog';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import ItConsultingServices from './newComponents/itConsultan/ItConsultingServices/ItConsultingServices';
import ApplicationDevelopment from './newComponents/applicationDevelop/applicationDevelopment/ApplicationDevelopment';
import DataDrivenSolution from './newComponents/dataDrivenSol/dataDrivenSolu/DataDrivenSolution';
import AdvancedAiSolution from './newComponents/advancedAI/advancedAIsolution/AdvancedAiSolution';
import BA from './newComponents/baServices/BA';
import CloudSolution from './newComponents/cloudSolution/CloudSolution';
import EduTechPro from './newComponents/eduTech/eduTechPro/EduTechPro';
import ContactUs from './components/cont/ContactUs';
import NotFound from './components/not/NotFound';
import ScrollToTop from './components/scroll/ScrollToTop';
import ScrollButton from './newComponents/scrollbutton/ScrollButton';
import Services from './newComponents/services/Services';

const App = () => {
  const location = useLocation();
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Function to disable right-click and show notification
    const disableRightClick = (event) => {
      event.preventDefault();
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 1000);
    };

    // Add event listener to the document
    document.addEventListener('contextmenu', disableRightClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  const validPaths = [
    '/',
    '/about',
    '/careers',
    '/blog',
    '/ContactUs',
    '/services',
    '/services/IT-Consulting',
    '/services/AppDevelop',
    '/services/Data-Driven',
    '/services/Advanced-AI',
    '/services/BA-Services',
    '/services/Cloud-Solutions',
    '/services/EduTechPro',
  ];

  return (
    <>
      {validPaths.includes(location.pathname) && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/careers" element={<Carriers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/IT-Consulting" element={<ItConsultingServices />} />
        <Route path="/services/AppDevelop" element={<ApplicationDevelopment />} />
        <Route path="/services/Data-Driven" element={<DataDrivenSolution />} />
        <Route path="/services/Advanced-AI" element={<AdvancedAiSolution />} />
        <Route path="/services/BA-Services" element={<BA />} />
        <Route path="/services/Cloud-Solutions" element={<CloudSolution />} />
        <Route path="/services/EduTechPro" element={<EduTechPro />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
      </Routes>
      <ScrollButton />
      {validPaths.includes(location.pathname) && <Footer />}
      {showNotification && (
        <div className="notification">
          Right-click is disabled
        </div>
      )}
    </>
  );
};

export default App;