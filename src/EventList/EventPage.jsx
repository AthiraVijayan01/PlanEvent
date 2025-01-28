import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventsPageStyles.css';

const EventsPage = () => {
  const navigate = useNavigate();
  const events = JSON.parse(localStorage.getItem('events')) || [];

  const handleEventSelection = (event) => {
    // Navigate to BookingPage and pass the event details as state
    navigate('/booking', { state: { ...event } });
  };

  return (
    <div className="events-container">
      <h2 className="events-heading">All Events</h2>

      {events.length > 0 ? (
        <div className="event-cards-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <h3>{event.name}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Description:</strong> {event.description}</p>
              <button
                className="select-event-button"
                onClick={() => handleEventSelection(event)}
              >
                Select Event
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-events-message">No events available. Create a new event to get started!</p>
      )}
    </div>
  );
};

export default EventsPage;
