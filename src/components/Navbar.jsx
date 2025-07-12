import React  from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/bistro bliss.png" alt="Logo" className="logo-img" />
        </div>

        <nav>
          <ul className="nav-links">
            <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
            <li><NavLink to="/menu" className={({ isActive }) => isActive ? 'active' : ''}>Menu</NavLink></li>
            <li><NavLink to="/pages" className={({ isActive }) => isActive ? 'active' : ''}>Pages</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
          </ul>
        </nav>

        <button className="book-button">Book A Table</button>
      </div>
    </header>
  );
};

export default Navbar;