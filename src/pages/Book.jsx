import React from 'react';
import Navbar from '../components/Navbar';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';
import './Book.css';

const Book = () => (
  <div className="book-page">
    <Navbar />
    <main className="book-main">
      <div className="booking-form-map-container">
        <BookingForm />
      <div className="map-background">
  <img
    src="/map.png"  // Remplace par le chemin réel de ton image
    alt="Restaurant ambiance"
    className="booking-image"
  />
</div>

      </div>
    </main>
    <Footer />
  </div>
);

export default Book;
