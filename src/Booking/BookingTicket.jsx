import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookingTicket.css'; // Corrected the path to the CSS file within the 'src/Booking' folder

const BookingTicket = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate function to redirect if needed
  const event = location.state; // Retrieve event data passed from EventsPage
  const [bookingConfirmed, setBookingConfirmed] = useState(false); // State to track booking status

  if (!event) {
    return <p>No event details found. Please select an event first.</p>;
  }

  // Function to handle booking confirmation
  const handleBookTickets = () => {
    setBookingConfirmed(true); // Set booking to confirmed
    // You can also navigate to another page or perform other actions here
  };

  // Navigate back to the events page
  const handleBackClick = () => {
    navigate('/EventPage');
  };

  return (
    <div className="booking-page">
      <h2>Booking Ticket for {event.name}</h2>
      <div className="booking-description">
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Description:</strong> {event.description}</p>
        
        {/* Booking confirmation message */}
        {bookingConfirmed && <p className="confirmation-message">Your tickets have been booked successfully!</p>}

        {/* Button to book tickets */}
        <button className="booking-button proceed-to-payment" onClick={handleBookTickets}>
          Book the Tickets
        </button>

        {/* Back button */}
        <button className="booking-button back-to-events" onClick={handleBackClick}>
          Back to Events
        </button>
      </div>
    </div>
  );
};

export default BookingTicket;
