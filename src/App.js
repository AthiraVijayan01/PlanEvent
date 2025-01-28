import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import HomePage from './Home/HomePage';
import EventsPage from './EventList/EventPage';
import BookingTicket from './Booking/BookingTicket'; 

import './App.css'; // Make sure App.css exists in the src folder

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route: Login page */}
        <Route path="/" element={<LoginForm />} />
        
        {/* Home page to create events */}
        <Route path="/HomePage" element={<HomePage />} />
        
        {/* Events page to display created events */}
        <Route path="/EventPage" element={<EventsPage />} />
        
        {/* Booking page for event ticket booking */}
        <Route path="/booking" element={<BookingTicket />} />
        
        {/* Payment page */}
        
      </Routes>
    </Router>
  );
}

export default App;
