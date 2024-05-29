import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard'; // Import the Dashboard component
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Add route for the dashboard page */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
