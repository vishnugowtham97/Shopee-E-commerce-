import React, { useState } from "react";

const BookingForm = ({ event, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfTickets: 1,
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, eventId: event.id });
    alert(
      `${formData.numberOfTickets} Ticket Booking confirmed! for ${event.title} `
    );
  };

  return (
    <div className="booking-form">
      <h2 className="booking-form-heading">Book Event: {event.title}</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="numberOfTickets">Number of Tickets:</label>
          <input
            type="number"
            name="numberOfTickets"
            id="numberOfTickets"
            value={formData.numberOfTickets}
            onChange={handleChange}
            min={1}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="additionalInfo">Additional Information:</label>
          <textarea
            name="additionalInfo"
            id="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">
            Submit Booking
          </button>
          <button type="button" onClick={onCancel} className="cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
