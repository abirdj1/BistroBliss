    import React, { useState } from 'react';
    import './BookingForm.css';

    const BookingForm = () => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        name: '',
        phone: '',
        people: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Booking request submitted! We will contact you soon.');
    };

    return (
        <section className="booking-form-section">
        <h1 className="booking-title">Book A Table</h1>
        <p className="booking-subtitle">
            We provide at the place of change, giving you the convenience you need to change a routine to a truly happening.
        </p>
        <div className="booking-form-card">
            <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                />
                <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-row">
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Full Name"
                />
                <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone"
                />
            </div>
            <div className="form-row">
                <select
                name="people"
                value={formData.people}
                onChange={handleChange}
                required
                >
                <option value="">Total Person</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>
                    {n} {n === 1 ? 'Person' : 'People'}
                    </option>
                ))}
                </select>
            </div>
            <button type="submit" className="book-btn">
                Book A Table
            </button>
            </form>
        </div>
        </section>
    );
    };

    export default BookingForm;
