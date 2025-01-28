import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import HomePage from './Home/HomePage';
import EventsPage from './EventList/EventPage';
import './App.css';

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
      </Routes>
    </Router>
  );
}

export default App;
