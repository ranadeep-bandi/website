const BlogsCards = ()=>{
    const cardImages = [
        'https://media.istockphoto.com/id/2152979172/photo/a-financial-advisor-advises-a-multiracial-couple-at-home.jpg?s=612x612&w=0&k=20&c=7R_Wz44c9fWGYHP5qVQmmIJ3upSxue6q0UYcTLubnRs=',
        'https://media.istockphoto.com/id/939329260/photo/preparing-plan-for-budget.jpg?s=612x612&w=0&k=20&c=OFjVYoC1UJvhjLZEeiWFdbMSpQVIK0vqoEDM0lIa_jE=',
        'https://media.istockphoto.com/id/956487012/photo/presenting-new-ideas.jpg?s=612x612&w=0&k=20&c=ax4pGw_cjWTiRFHdnliYQ-9-tY8uuUiaAXDUhyrnybM=',
        'https://media.istockphoto.com/id/514467816/photo/time-for-business-conference.jpg?s=612x612&w=0&k=20&c=TtteR3zXqwnWkgRtTap9CGnoSBF3v_21vO_9CufrjbQ=',
        'https://media.istockphoto.com/id/1194254574/photo/businesspeople-having-a-meeting.jpg?s=612x612&w=0&k=20&c=wfucJZjNFbGsnGFoSb3pIBkZ2yx0bTnEPzzftERVBmM=',
        'https://media.istockphoto.com/id/1412182717/photo/successful-group-of-businesspeople-having-a-briefing.jpg?s=612x612&w=0&k=20&c=5M6cCFnRy2XkqebNQuNX4mpQ4c0I_EXe4c0Dwv2esPI=',
      ];
    
      const dataBlog = [
        "We revolutionized a traditional banking system by implementing a secure, scalable, and user-friendly digital platform. Our solution enhanced customer experiences with features like mobile banking, online transactions, and real-time account management. By integrating advanced security protocols, we ensured data protection and compliance with industry standards.",
        "We developed a robust e-commerce platform that streamlined online shopping experiences. Our solution included a seamless user interface, efficient product management, and secure payment gateways. This project enabled our client to handle high traffic volumes, boost sales, and provide customers with a superior online shopping journey.",
        "We designed and implemented a comprehensive payment gateway solution, facilitating smooth and secure online transactions. Our system supports multiple payment methods, including credit cards, digital wallets, and bank transfers. The project improved transaction speed, enhanced security, and ensured regulatory compliance for our client.",
        "We created an innovative e-learning platform tailored to modern educational needs. Our solution included interactive course materials, virtual classrooms, and performance analytics. This project empowered educators to deliver engaging content and students to achieve their learning goals efficiently.",
        "We optimized a delivery service platform to enhance logistics and customer satisfaction. Our solution featured real-time tracking, automated dispatch, and route optimization. By improving operational efficiency and transparency, our client could deliver faster and more reliably, leading to higher customer satisfaction.",
        "We developed cutting-edge generative AI solutions that drive creativity and efficiency across various industries. Our AI models are capable of creating unique content, optimizing processes, and providing intelligent recommendations. This project demonstrated the potential of AI to transform traditional workflows and unlock new business opportunities."
      ]
    
      const headText = [
        "Transforming Banking Systems","E-commerce Excellence","Payment Gateway Integration",
        "Advancing Educational Platforms","Streamlining Delivery Services ","Generative AI Innovations "
      ]

    return(
        <div className="cards-container">
        {cardImages.map((image, index) => (
          <div className="card" key={index}>
            <img src={image} alt={`Card ${index + 1}`} className="card-image" />
            <div className="card-content">
            <h1 className='head3'>{headText[index]}</h1>
              <p className='para3'>{dataBlog[index]}</p>
            </div>
          </div>
        ))}
      </div>
    )
}

export default BlogsCards