import React from 'react';
import './Asection.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Column (Image and Contact Box) */}
        <div className="about-left-column">
          {/* Image */}
          <div className="about-image">
            <img src="/about.png" alt="Delicious wrap" />
          </div>
          
          {/* Contact Box */}
          <div className="about-box">
            <p className="box-title">Come and visit us</p>
            <p>📞 (414) 857 - 0107</p>
            <p>✉️ happy.tummy@restaurant.com</p>
            <p>📍 837 W Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="about-content">
          <h2>We provide healthy food for your family.</h2>
          <p>
            Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
          </p>
          <p>
            At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
          </p>
          <button className="about-btn">More About Us</button>
        </div>
      </div>
    </section>
  );
};

export default About;