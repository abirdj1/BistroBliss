import React from 'react';
import './Delivery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTags, faGlobe } from '@fortawesome/free-solid-svg-icons'; 

const Delivery = () => {
  return (
    <section className="delivery-section" id="delivery">
      <div className="delivery-container">
        {/* Images Section */}
        <div className="delivery-images">
          <div className="main-image-wrapper">
            <img src="/dev1.png" alt="Chef preparing food" className="main-chef-image" />
          </div>
          <div className="small-images-wrapper">
            <img src="/dev2.png" alt="Dish with shrimp" className="small-delivery-image" />
            <img src="/dev3.png" alt="Grilled food platter" className="small-delivery-image" />
          </div>
        </div>

        {/* Text Content */}
        <div className="delivery-text">
          <h2>Fastest Food Delivery in City</h2>
          <p>
            Our visual designer lets you quickly and off drag a down your way to customapps for both keep desktop.
          </p>

          <ul className="delivery-features">
            {/* Replaced emojis with Font Awesome icons */}
            <li>
              <FontAwesomeIcon icon={faClock} className="feature-icon" /> Delivery within 30 minutes
            </li>
            <li>
              <FontAwesomeIcon icon={faTags} className="feature-icon" /> Best Offer & Prices
            </li>
            <li>
              <FontAwesomeIcon icon={faGlobe} className="feature-icon" /> Online Services Available
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Delivery;