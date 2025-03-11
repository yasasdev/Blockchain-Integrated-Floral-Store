import React from 'react';

const AboutPage = () => {
  return (
    <section className="about">
      <h1 className="heading">
        <span>About </span> us
      </h1>

      <div className="row">
        <div className="video-container">
          <video 
            src="/images/flowerVideo.mp4" 
            loop 
            autoPlay 
            muted 
            aria-label="Flower video"
          ></video>
          <h3>Premier Floral Experts</h3>
        </div>

        <div className="content">
          <h3>Why Choose Us?</h3>
          <p>
            🌿 Experience the luxury of freshly handpicked flowers delivered straight to your doorstep.  
            Each bloom is carefully selected to ensure exceptional beauty and lasting freshness.  
            From elegant roses to exotic arrangements, we offer flowers for every occasion.  
            Enjoy timely delivery to make your special moments unforgettable.  
            We are committed to sustainable farming and eco-friendly packaging, ensuring a positive impact on the environment.  
            Your happiness is our priority, with 24/7 support and a seamless service experience.  
        </p>


          <a href="#" className="btn" role="button">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
