import React from 'react';
import './EventsPageStyles.css';

const EventsPage = () => {
  const events = JSON.parse(localStorage.getItem('events')) || [];

  return (
    <div
      className="events-container"
      style={{
        backgroundImage: `url('/bg3.jpg')`, // Reference the image from the public folder
        backgroundSize: 'cover', // Ensures the image covers the full page
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', // Centers the image
        backgroundAttachment: 'fixed', // Keeps the background fixed while scrolling
        minHeight: '100vh', // Covers the full viewport height
        padding: '20px',
        boxSizing: 'border-box',
        color: '#fff', // Ensure text is visible on the background
      }}
    >
      <h2 style={{ textAlign: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
        All Events
      </h2>

      {events.length > 0 ? (
        <div className="event-cards-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <h3>{event.name}</h3>
              <p>
                <strong>Date:</strong> {event.date}
              </p>
              <p>
                <strong>Time:</strong> {event.time}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <p>
                <strong>Description:</strong> {event.description}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          No events available. Create a new event to get started!
        </p>
      )}
    </div>
  );
};

export default EventsPage;
