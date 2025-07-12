import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    title: "The best restaurant",
    text: "Last night, we dined at Chez Gourmet and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    name: "Sophie Robson",
    location: "Los Angeles, CA",
    avatar: "/card1.png", // Ensure this path exists in your public folder
  },
  {
    title: "Simply delicious",
    text: "Chez Gourmet exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
    name: "Matt Cannon",
    location: "San Diego, CA",
    avatar: "/card2.png", // Ensure this path exists in your public folder
  },
  {
    title: "One of a kind restaurant",
    text: "The culinary experience at Chez Gourmet is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
    name: "Andy Smith",
    location: "San Francisco, CA",
    avatar: "/card3.png", // Ensure this path exists in your public folder
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-title">What Our Customers Say</h2>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            {/* Review Title */}
            <h3 className="testimonial-review-title">“{item.title}”</h3>
            {/* Main Review Text */}
            <p className="testimonial-text">{item.text}</p>
            
            <div className="testimonial-author-info">
              {/* Avatar Image */}
              <img
                src={item.avatar}
                alt={`${item.name}'s avatar`}
                className="testimonial-avatar"
                onError={(e) => {
                  e.target.src = '/default-avatar.jpg'; // Fallback image if avatar fails to load
                }}
              />
              <div className="author-details">
                {/* Reviewer Name */}
                <h4 className="testimonial-name">{item.name}</h4>
                {/* Reviewer Location */}
                <p className="testimonial-location">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;