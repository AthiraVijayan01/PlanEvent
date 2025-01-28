import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookingDetailstyle.css'; // Ensure to rename your CSS file as well

const BookingDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [ticketQuantity, setTicketQuantity] = useState(1); // Default to 1 ticket
  const [totalPrice, setTotalPrice] = useState(location.state?.ticketPrice || 0);
  const event = location.state; // Event details passed from EventsPage

  useEffect(() => {
    setTotalPrice(ticketQuantity * (event?.ticketPrice || 0)); // Recalculate price based on quantity
  }, [ticketQuantity, event?.ticketPrice]);

  const handleBookingConfirmation = () => {
    alert('Your booking has been confirmed!');
    // You can store booking details in localStorage or a backend API
    navigate('/homepage');
  };

  const handleCancelBooking = () => {
    alert('Booking has been canceled.');
    navigate('/events'); // Redirect back to events page
  };

  const handleDeleteBooking = () => {
    alert('Booking has been deleted.');
    navigate('/events'); // Redirect back to events page after deletion
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleTicketQuantityChange = (e) => {
    const quantity = Math.max(1, e.target.value); // Ensure at least 1 ticket
    setTicketQuantity(quantity);
  };

  return (
    <div className="booking-container">
      <h2>Book Tickets for {event.name}</h2>

      <div className="event-details">
        <p><strong>Description:</strong> {event.description}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Category:</strong> {event.category}</p>
        <p><strong>Ticket Price:</strong> {event.ticketPrice}</p>
      </div>

      <div className="booking-form">
        <div className="ticket-info">
          <label htmlFor="ticket-quantity">Ticket Quantity:</label>
          <input
            type="number"
            id="ticket-quantity"
            value={ticketQuantity}
            onChange={handleTicketQuantityChange}
            min="1"
          />
        </div>

        <div className="total-price">
          <p><strong>Total Price: </strong>${totalPrice}</p>
        </div>

        <div className="button-group">
          <button className="confirm-booking" onClick={handleBookingConfirmation}>Confirm Booking</button>
          <button className="cancel-booking" onClick={handleCancelBooking}>Cancel Booking</button>
          <button className="delete-booking" onClick={handleDeleteBooking}>Delete Booking</button>
          <button className="back-button" onClick={handleBack}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
