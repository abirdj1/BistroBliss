
import React from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUtensils, faGlassMartini, faCakeCandles } from '@fortawesome/free-solid-svg-icons';

const menuItems = [
  {
    icon: faCoffee,
    title: 'Breakfast',
    description: 'In the new era of technology we look in the future with certainty and pride for our life.',
    link: '#'
  },
  {
    icon: faUtensils,
    title: 'Main Dishes',
    description: 'In the new era of technology we look in the future with certainty and pride for our life.',
    link: '#'
  },
  {
    icon: faGlassMartini,
    title: 'Drinks',
    description: 'In the new era of technology we look in the future with certainty and pride for our life.',
    link: '#'
  },
  {
    icon: faCakeCandles,
    title: 'Desserts',
    description: 'In the new era of technology we look in the future with certainty and pride for our life.',
    link: '#'
  }
];

const Menu = () => {
  return (
    <section className="menu-section" id="menu">
      <h3 className="menu-title">Browse Our Menu</h3>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-card">
            <div className="menu-icon">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.link} className="menu-link">Explore Menu</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
