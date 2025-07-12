import React from "react";
import "./AboutInfo.css";

const AboutInfo = () => {
  return (
    <section className="about-info">
      <div className="container">
        <div className="text-content">
          <h2>
            A little information <br />
            <span>for our valuable guest</span>
          </h2>
          
          <p className="description">
            At place, we believe that dining is not just about food, but also about the overall experience. 
            Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
          </p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">3</div>
              <div className="stat-label">Locations</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">1995</div>
              <div className="stat-label">Founded</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">65+</div>
              <div className="stat-label">Staff Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">100%</div>
              <div className="stat-label">Satisfied Customers</div>
            </div>
          </div>
        </div>
        
        <div className="image-content">
          <div className="image-container">
            <img 
              src="/end.png"
              alt="Restaurant ambiance" 
              className="restaurant-image"
            />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;