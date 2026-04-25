import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Assessment from './pages/Assessment';
import Dashboard from './pages/Dashboard';
import Methodology from './pages/Methodology';
import Services from './pages/Services';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <div className="flex-col" style={{ minHeight: '100vh', display: 'flex' }}>
        <Navbar />
        <main style={{ flex: 1, paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
