import React, { useState } from 'react';
import './Homepagestyles.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [ticketCount, setTicketCount] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventDetails = {
      name: eventName,
      date: eventDate,
      time: eventTime,
      location: eventLocation,
      description: eventDescription,
      ticketCount,
      organizer,
      category,
    };

    const existingEvents = JSON.parse(localStorage.getItem('events')) || [];
    existingEvents.push(eventDetails);
    localStorage.setItem('events', JSON.stringify(existingEvents));

    console.log("New Event Created: ", eventDetails);
    alert('Event Created Successfully!');
    navigate('/EventPage');
  };

  return (
    <div className="event-management-container">
      <h2>Create a New Event</h2>
      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-group">
          <label>Event Name:</label>
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} placeholder="Enter event name" required />
        </div>
        <div className="form-group">
          <label>Event Date:</label>
          <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Event Time:</label>
          <input type="time" value={eventTime} onChange={(e) => setEventTime(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Event Location:</label>
          <input type="text" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} placeholder="Enter event location" required />
        </div>
        <div className="form-group">
          <label>Event Description:</label>
          <textarea value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} placeholder="Describe the event" rows="4" required />
        </div>
        <div className="form-group">
          <label>Ticket Count:</label>
          <input type="number" value={ticketCount} onChange={(e) => setTicketCount(e.target.value)} placeholder="Enter ticket count" required />
        </div>
        <div className="form-group">
          <label>Organizer:</label>
          <input type="text" value={organizer} onChange={(e) => setOrganizer(e.target.value)} placeholder="Enter organizer name" required />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select a category</option>
            <option value="Conference">Conference</option>
            <option value="Workshop">Workshop</option>
            <option value="Concert">Concert</option>
            <option value="Sports">Sports</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-actions">
          <button type="submit">Create Event</button>
          <button type="button" onClick={() => navigate('/events')}>Cancel</button>
          <button type="button" onClick={() => navigate('/EventPage')}>View Events</button>
        </div>
      </form>
    </div>
  );
}

export default HomePage;