import React from 'react';
import '../components/css/ProfileCard.css'; // Import the CSS file for styling
 
const profiles = [
  {
    name: 'Jane Smith',
    role: 'Product Manager',
    description: 'Jane leads the product team with a focus on user-centric design. She has over 8 years of experience in product development and is skilled in agile methodologies and cross-functional team leadership.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'John Doe',
    role: 'Project Lead',
    description: 'John is a passionate software engineer with 5 years of experience. He specializes in developing scalable web applications and has a keen interest in cloud computing and AI technologies.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Alice Johnson',
    role: 'Sr HR',
    description: 'Alice designs intuitive user interfaces that enhance user experience. Her expertise lies in creating wireframes, prototypes, and conducting user research to inform design decisions.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Bob Brown',
    role: 'Technical Manager',
    description: 'Bob analyzes data to drive business decisions and insights. With a background in statistics and machine learning, he develops models that help predict market trends and consumer behavior.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
];
 
const ProfileCard = () => {
  return (
    <div className="careers-page01">
      <div className="heading-section01">
        <h1 className='h1-01'>Meet Our Talent Acquisition Team</h1>
        <p className='p1-01'>
        Our Talent Acquisition team is at the forefront of identifying and attracting top talent to join our company. With a deep understanding of industry trends and a commitment to excellence, they work tirelessly to ensure we bring in the best candidates who align with our company values and contribute to our growth and success. Their expertise spans across various domains, enabling us to build a dynamic and innovative workforce that drives our company forward.
        </p>
      </div>
      <div className="profile-card-container01">
        {profiles.map((profile, index) => (
          <div
            className="profile-card01"
            key={index}
            style={{ animationDelay: `${index * 0.5}s` }} // Delay each card's animation
          >
            <img className='img-01' src={profile.image} alt={`${profile.name}'s profile`} />
            <div className="profile-content01">
              <h2 className='h2-01'>{profile.name}</h2>
              <h4 className='h4-01'>{profile.role}</h4>
              <p className='p2-01'>{profile.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default ProfileCard;