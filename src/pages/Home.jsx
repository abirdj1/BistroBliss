import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Asection from '../components/Asection';
import Services from '../components/Services';
import Delivery from '../components/Delivery';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Menu/>
      <Asection/>
     <Services/>
  <Delivery/>
  <Testimonials/>
  <Blog/>
  <Footer/>
    </>
  );
}

export default Home;
