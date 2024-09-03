import React, { useEffect, useState } from 'react';
 
const ScrollButton = () => {
    const [visible, setVisible] = useState(false);
 
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / windowHeight) * 100;
 
        if (scrollPercentage > 50) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };
 
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
 
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
 
    return (
        <button onClick={scrollToTop} style={{
            display: visible ? 'block' : 'none',
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 99,
            backgroundColor: '#007BFF',
            color: 'white',
            padding: '15px 20px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s, transform 0.3s',
            fontSize: '20px', // Increase font size
            fontWeight: 'bold', // Make font bold
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#007BFF'}
        onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
        onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
        >
            &#8679; {/* Up arrow symbol */}
        </button>
    );
};
 
export default ScrollButton;