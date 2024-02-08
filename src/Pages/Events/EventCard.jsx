import React from "react";

const EventCard = ({ event, onBookEvent }) => {
  return (
    <div className="event-card">
      <img src={event.imageUrl} alt={event.title} className="event-image" />
      <div className="event-details">
        <h3 className="event-title">{event.title}</h3>
        <p className="event-description">{event.description}</p>
        <p className="event-date">Date: {event.date}</p>
        <p className="event-location">Location: {event.location}</p>
        <button className="book-button" onClick={() => onBookEvent(event)}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;
