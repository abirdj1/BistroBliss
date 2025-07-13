import React, { useState } from 'react';
import './Menuitem.css';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Breakfast', 'Main Dishes', 'Drinks', 'Desserts'];

  const menuItems = [
    { id: 1, category: 'Breakfast', name: 'Fried Eggs', price: '$9.99', image: '/eggs.png', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
    { id: 2, category: 'Main Dishes', name: 'Hawaiian Pizza', price: '$15.99', image: '/pizza.png', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
    { id: 3, category: 'Drinks', name: 'Martinez Cocktail', price: '$7.25', image: '/boi.png', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
    { id: 4, category: 'Desserts', name: 'Butterscotch Cake', price: '$20.99', image: '/ban.png', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
    { id: 5, category: 'Drinks', name: 'Mint Lemonade', price: '$5.89', image: '/limo.png', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
    { id: 6, category: 'Desserts', name: 'Chocolate Icecream', price: '$18.05', image: '/choco.png', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
    { id: 7, category: 'Main Dishes', name: 'Cheese Burger', price: '$12.65', image: '/brg.png', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
    { id: 8, category: 'Breakfast', name: 'Classic Waffles', price: '$12.99', image: '/pan.png', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
  ];

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section className="menu-section">
      <h1 className="menu-title">Our Menu</h1>
      <p className="menu-subtitle">
        We consider all the drivers of change gives you the components you need to change to create a truly happens.
      </p>

      <div className="menu-categories">
        {categories.map(category => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-img" />
            <div className="menu-info">
              <p className="menu-price">{item.price}</p>
              <h3 className="menu-name">{item.name}</h3>
              <p className="menu-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
