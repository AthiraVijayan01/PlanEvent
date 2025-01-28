// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import HomePage from './Home/HomePage';
import EventsPage from './EventList/EventPage';
import BookingTicket from './Booking/BookingTicket';
import BookingDetails from './BookingDetails/BookingDetails'; // Import BookingDetails
import RegistrationPage from './Registration/Registrationpage';
import ForgotPasswordPage from './ForgotPassword/ForgotPassword'; // Correct path for ForgotPasswordPage

import './App.css'; // Ensure App.css exists in the src folder

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route: Login page */}
        <Route path="/" element={<LoginForm />} />

        {/* Registration page route */}
        <Route path="/register" element={<RegistrationPage />} />

        {/* Forgot Password page route */}
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Home page to create events */}
        <Route path="/HomePage" element={<HomePage />} />

        {/* Events page to display created events */}
        <Route path="/EventPage" element={<EventsPage />} />

        {/* Booking page for event ticket booking */}
        <Route path="/booking" element={<BookingTicket />} />

        {/* BookingDetails page for final ticket booking details */}
        <Route path="/booking-details" element={<BookingDetails />} /> {/* Add this route */}

        {/* Payment page route (you can add a route for payment page later) */}
      </Routes>
    </Router>
  );
}

export default App;
