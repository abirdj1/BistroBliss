
// src/components/Layout.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArticlePage from '../components/ArticlePage';


const Blogdetaills = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
    <ArticlePage/>
      <Footer />
    </div>
  );
};

export default Blogdetaills;