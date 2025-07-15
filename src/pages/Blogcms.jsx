// src/components/Layout.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogPage from '../components/BlogPage';


const Blogcms = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <BlogPage/>
      <Footer />
    </div>
  );
};

export default Blogcms;