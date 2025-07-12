import React from 'react';
import './Services.css';


const services = [
  {
    // Reference images directly from the root of the public folder
    image: '/catering.png', // Assuming catering.png is directly in your public folder
    title: 'Caterings',
    description: 'In the new era of technology we look in the future with certainty for life.',
    link: '#'
  },
  {
    image: '/birthday.png', // Assuming birthday.png is directly in your public folder
    title: 'Birthdays',
    description: 'In the new era of technology we look in the future with certainty for life.',
    link: '#'
  },
  {
    image: '/wedding.png', // Assuming wedding.png is directly in your public folder
    title: 'Weddings',
    description: 'In the new era of technology we look in the future with certainty for life.',
    link: '#'
  },
  {
    image: '/events.png', // Assuming events.png is directly in your public folder
    title: 'Events',
    description: 'In the new era of technology we look in the future with certainty for life.',
    link: '#'
  }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2 className="services-title">
        We also offer unique <br /> services for your events
      </h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-image-wrapper">
              {/* The src attribute will correctly resolve the path from the public folder */}
              <img src={service.image} alt={service.title} className="service-image" />
            </div>
            <div className="service-content">
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
              {/* If you still want a "Learn More" button, you can uncomment this */}
              {/* <a href={service.link} className="service-btn">Learn More →</a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;