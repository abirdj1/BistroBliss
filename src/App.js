// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MenuP from './pages/MenuP';
import Book from './pages/Book';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<MenuP />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </Router>
  );
}

export default App;