import React from 'react';

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  content: {
    textAlign: 'center',
  },
  rotatingImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    perspective: '1000px',
  },
  rotatingImage: {
    width: '80px',
    height: 'auto',
    animation: 'rotate 10s linear infinite',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
};
 
const styleSheet = document.styleSheets[0];
const keyframes = `
  @keyframes rotate {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
`;
 
const AppImage = () => {
  return (
    <div style={styles.app}>
      <div style={styles.content}>
        <RotatingImage
          src="https://www.unistechnosoft.com/wp-content/uploads/2021/12/unis.png"
          alt="UNIS"
        />
        <div style={styles.cardContainer}>
        </div>
      </div>
    </div>
  );
};
 
const RotatingImage = ({ src, alt }) => {
  return (
    <div style={styles.rotatingImageContainer}>
      <img src={src} alt={alt} style={styles.rotatingImage} />
    </div>
  );
};
 

styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
 
export default AppImage;