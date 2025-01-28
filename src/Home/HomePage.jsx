import React, { useState } from 'react';
import './Homepagestyles.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function HomePage(){
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const eventDetails = {
      name: eventName,
      date: eventDate,
      time: eventTime,
      location: eventLocation,
      description: eventDescription,
    };
  
    // Retrieve existing events from local storage
    const existingEvents = JSON.parse(localStorage.getItem('events')) || [];
  
    // Add the new event to the list
    existingEvents.push(eventDetails);
  
    // Save updated list back to local storage
    localStorage.setItem('events', JSON.stringify(existingEvents));
  
    console.log("New Event Created: ", eventDetails);
    alert('Event Created Successfully!');
  
    // Navigate to the events page
    navigate('/EventPage');
  };
  

  return (
    <div className="event-management-container">
      <h2>Create a New Event</h2>
      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-group">
          <label>Event Name:</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Enter event name"
            required
          />
        </div>

        <div className="form-group">
          <label>Event Date:</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Event Time:</label>
          <input
            type="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Event Location:</label>
          <input
            type="text"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            placeholder="Enter event location"
            required
          />
        </div>

        <div className="form-group">
          <label>Event Description:</label>
          <textarea
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            placeholder="Describe the event"
            rows="4"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit">Create Event</button>
          <button type="button" onClick={() => navigate('/events')}>Cancel</button>
          {/* <button type="button" onClick={() => navigate('/events')}>View Events</button>  */}
          <button type="button" onClick={() => navigate('/EventPage')}>View Events</button>

        </div>
      </form>
    </div>
  );
}

export default HomePage;
