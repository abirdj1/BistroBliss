// pages/Menu.js
import React from 'react';
import Navbar from '../components/Navbar';
import Menuitem from '../components/Menuitem';
import OrderingApps from '../components/OrderingApps';
import Footer from '../components/Footer';

const MenuPage = () => {
  return (
    <div className="menu-page">
      <Navbar />
      <Menuitem />
      <OrderingApps />
      <Footer />
    </div>
  );
};

export default MenuPage;