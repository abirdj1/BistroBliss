import React from "react";
import { FaUtensils, FaListAlt, FaClock } from "react-icons/fa";
import "./AboutAuthentic.css";

const AboutAuthentic = () => {
  return (
    <section className="about-authentic" aria-label="Authentic Dining Experience">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="overlay"></div>
        <div className="welcome-content">
          <h2 className="welcome-title">
            Feel the authentic & original taste from us
          </h2>
          <div className="play-button" role="button" aria-label="Play video">
            <div className="play-icon">
              <div className="triangle"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="features-section" aria-label="Key Features">
        <div className="feature-item">
          <div className="icon-box">
            <FaUtensils className="icon" />
          </div>
          <h3>Multi Cuisine</h3>
          <p>
            In the new era of technology we look in the future with certainty
            life.
          </p>
        </div>
        <div className="feature-item">
          <div className="icon-box">
            <FaListAlt className="icon" />
          </div>
          <h3>Easy To Order</h3>
          <p>
            In the new era of technology we look in the future with certainty
            life.
          </p>
        </div>
        <div className="feature-item">
          <div className="icon-box">
            <FaClock className="icon" />
          </div>
          <h3>Fast Delivery</h3>
          <p>
            In the new era of technology we look in the future with certainty
            life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthentic;