import React from 'react';
import './MenuHeader.css';

const MenuHeader = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="menu-header">
      <h1 className="menu-title">Our Menu</h1>
      <p className="menu-subtitle">
        We consider all the drivers of change gives you the components you need
        to change to create a truly happens.
      </p>
      <div className="menu-categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${
              selectedCategory === category ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuHeader;
