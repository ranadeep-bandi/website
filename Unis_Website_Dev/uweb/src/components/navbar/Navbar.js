import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);
  const navigate = useNavigate();

  // Update mobile state on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Toggle menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle services click for mobile and desktop
  const handleServicesClick = () => {
    if (isMobile) {
      if (dropdownOpen) {
        setDropdownOpen(false);
        setIsOpen(false);
        navigate('/services');
      } else {
        setDropdownOpen(true);
      }
    } else {
      setDropdownOpen(true);
      navigate('/services');
    }
  };

  // Close dropdown when clicking outside or when an item is clicked
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
    if (window.innerWidth <= 768 && navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Close dropdown and menu on item click
  const handleItemClick = () => {
    setDropdownOpen(false);
    setIsOpen(false);
  };

  // Handle scroll event
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        setDropdownOpen(false);
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

      if (currentScroll > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle mouse leave for dropdown
  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  // Handle mouse enter for dropdown (desktop only)
  const handleMouseEnter = () => {
    if (!isMobile) {
      setDropdownOpen(true);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={navbarRef}>
      <div className="navbar-logo">
        <Link to="/">
          <img src="https://i.ibb.co/qJ6GCND/unis.png" alt="UNIS" className="logo" />
        </Link>
      </div>
      <button className="navbar-toggler" onClick={toggleMenu}>
        {isOpen ? <FiX className="toggler-icon" /> : <FiMenu className="toggler-icon" />}
      </button>
      <ul className={`navbar-nav ${isOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={handleItemClick}>
            Home
          </Link>
        </li>
        <li
          className={`nav-item dropdown ${dropdownOpen ? 'open' : ''}`}
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter} // Open on hover for desktop
          onMouseLeave={handleMouseLeave}
        >
          <span
            className="nav-link dropdown-toggle"
            style={{ fontSize: '18px' }}
            onClick={handleServicesClick}
          >
            Services
            <FiChevronDown className={`dropdown-arrow ${dropdownOpen ? 'rotate' : ''}`} />
          </span>
          <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
            <Link to="/services/IT-Consulting" className="dropdown-item" onClick={handleItemClick}>
              IT Consulting Services
            </Link>
            <Link to="/services/AppDevelop" className="dropdown-item" onClick={handleItemClick}>
              Application Development
            </Link>
            <Link to="/services/Data-Driven" className="dropdown-item" onClick={handleItemClick}>
              Data Driven Solutions
            </Link>
            <Link to="/services/Advanced-AI" className="dropdown-item" onClick={handleItemClick}>
              Advanced AI Solutions
            </Link>
            <Link to="/services/BA-Services" className="dropdown-item" onClick={handleItemClick}>
              BA Services
            </Link>
            <Link to="/services/Cloud-Solutions" className="dropdown-item" onClick={handleItemClick}>
              Cloud Solutions
            </Link>
            <Link to="/services/EduTechPro" className="dropdown-item" onClick={handleItemClick}>
              EduTechPro Solutions
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" onClick={handleItemClick}>
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/careers" className="nav-link" onClick={handleItemClick}>
            Careers
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-link" onClick={handleItemClick}>
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ContactUs" className="nav-link" onClick={handleItemClick}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;