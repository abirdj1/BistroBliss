// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MenuP from './pages/MenuP';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Blogcms from './pages/Blogcms';
import Blogdetaills from './pages/Blogdetaills';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<MenuP />} />
        <Route path="/book" element={<Book />} />
        <Route path="/pages" element={<Blogcms />} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/Blogdetaills" element={<Blogdetaills />} />
      </Routes>
    </Router>
  );
}

export default App;