// pages/Contact.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
  // State management for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    // Add API call or further logic here if needed
  };

  return (
    <div className="contact-page">
      <Navbar />
      <main className="contact-main">
        <section className="contact-section">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            We consider all the drivers of change gives you the components you need to change to create a truly happens.
          </p>
          {/* Contact Form */}
          <div className="contact-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter email address"
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Write a subject"
                />
              </div>
              <div className="form-row">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message"
                />
              </div>
              <button type="submit" className="send-btn">
                Send
              </button>
            </form>
          </div>
          {/* Contact Details */}
          <div className="contact-details">
            <div>
              <p><strong>Call Us:</strong></p>
              <p>+1-234-567-8900</p>
            </div>
            <div>
              <p><strong>Hours:</strong></p>
              <p>Mon-Fri: 8am - 8pm</p>
              <p>Sat, Sun: 9am - 10pm</p>
            </div>
            <div>
              <p><strong>Our Location:</strong></p>
              <p>123 Bridge Street</p>
              <p>Nowhere Land, LA 12345</p>
              <p>United States</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;