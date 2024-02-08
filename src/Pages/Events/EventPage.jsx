import React, { useState } from "react";
import "./Events.css";
import eventsData from "./Events";
import EventCard from "./EventCard";
import BookingForm from "./BookingForm";

const EventPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleBookEvent = (event) => {
    setSelectedEvent(event);
    window.scrollTo(0, 0);
  };

  const handleBookingSubmit = (formData) => {
    console.log("Booking form submitted:", formData);
    setSelectedEvent(null);
  };

  return (
    <div className="landing-page">
      <h2 className="landing-page-heading">Upcoming Events and Promotions</h2>
      {selectedEvent && (
        <BookingForm
          event={selectedEvent}
          onSubmit={handleBookingSubmit}
          onCancel={() => setSelectedEvent(null)}
        />
      )}
      <div className="events-list">
        {eventsData.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onBookEvent={handleBookEvent}
          />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
