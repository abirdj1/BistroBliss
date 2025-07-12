import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Best food for your taste</h1>
        <p>
          Discover delectable cuisine and unforgettable moments
          in our welcoming, culinary haven.
        </p>
        <div className="hero-buttons">
          <button className="btn-red">Book A Table</button>
          <button className="btn-outline">Explore Menu</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;