import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CalendarCheck } from 'lucide-react';
import FeedbackModal from '../components/FeedbackModal';

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [serviceType, setServiceType] = useState('');
  
  const location = useLocation();

  useEffect(() => {
    // Read query params
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    if (type) {
      setServiceType(type);
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!localStorage.getItem('holistiq_feedback_booking')) {
      setShowFeedback(true);
    }
  };

  if (submitted) {
    return (
      <div className="app-container text-center animate-fade-in" style={{ padding: '5rem 2rem' }}>
        <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', border: '2px solid var(--primary-color)' }}>
          <CalendarCheck size={80} color="var(--primary-color)" style={{ margin: '0 auto 1.5rem' }} />
          <h2 style={{ marginBottom: '1rem', fontSize: '2.5rem', color: 'var(--primary-color)' }}>Booking Confirmed!</h2>
          <p style={{ opacity: 0.9, fontSize: '1.1rem' }}>
            Our team will contact you shortly to finalize the time and location for your in-person session. Get ready to elevate your energy!
          </p>
        </div>

        {showFeedback && (
          <div style={{ marginTop: '2rem' }}>
            <FeedbackModal context="Booking" inline={true} onClose={() => setShowFeedback(false)} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="app-container animate-fade-in" style={{ padding: '3rem 2rem' }}>
      <div className="text-center mb-2">
        <h1 style={{ color: 'var(--text-color)' }}>Book a Consultation</h1>
        <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          Take the next step in your wellness journey. Schedule an in-person assessment with our holistic experts.
        </p>
      </div>

      <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', borderTop: '4px solid var(--primary-color)' }}>
        <form onSubmit={handleSubmit} className="flex-col gap-1">
          <div className="flex-col">
            <label style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-color)' }}>Full Name</label>
            <input required type="text" placeholder="John Doe" style={styles.input} />
          </div>
          
          <div className="flex-col">
            <label style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-color)' }}>Email Address</label>
            <input required type="email" placeholder="john@example.com" style={styles.input} />
          </div>

          <div className="flex-col">
            <label style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-color)' }}>Service Type</label>
            <select 
              required 
              style={styles.input} 
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <option value="">Select a service...</option>
              <option value="individual">Individual Energy Diagnostics</option>
              <option value="corporate">Corporate Wellness Audit</option>
              <option value="acupressure">Acupressure Session</option>
            </select>
          </div>

          <div className="flex-col">
            <label style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-color)' }}>Preferred Date</label>
            <input required type="date" style={styles.input} />
          </div>

          <button type="submit" className="btn btn-primary mt-1" style={{ width: '100%', fontSize: '1.2rem', padding: '1rem' }}>
            Request Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  input: {
    padding: '1rem',
    borderRadius: '12px',
    border: '2px solid var(--border-color)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    fontSize: '1rem',
    color: 'var(--text-color)',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  }
};

export default Booking;
