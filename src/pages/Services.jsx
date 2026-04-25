import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, Briefcase } from 'lucide-react';
import FAQ from '../components/FAQ';

const Services = () => {
  return (
    <div className="app-container animate-fade-in" style={{ padding: '3rem 2rem' }}>
      <div className="text-center mb-2">
        <h1 style={{ color: 'var(--primary-color)', fontSize: '3.5rem', marginBottom: '1rem' }}>Our Services</h1>
        <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          We offer non-invasive, scientifically backed wellness assessments for both individuals and organizations.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2" style={{ marginTop: '3rem' }}>
        <div className="glass-card flex-col items-center text-center">
          <div style={styles.iconWrapper}>
            <Users size={48} color="white" />
          </div>
          <h2 style={{ marginBottom: '1rem' }}>Individual Diagnostics</h2>
          <p style={{ opacity: 0.8, marginBottom: '1.5rem', flex: 1 }}>
            In-person, one-on-one sessions where our experts use Acupressure and Energy Diagnostics to evaluate your holistic wellness and provide a customized recovery plan.
          </p>
          <ul style={{ textAlign: 'left', opacity: 0.8, marginBottom: '2rem', paddingLeft: '1.5rem', width: '100%' }}>
            <li>Comprehensive Energy Flow Analysis</li>
            <li>Ayurvedic Diet Plan</li>
            <li>Personalized Mindfulness Routine</li>
          </ul>
          <Link to="/booking?type=individual" className="btn btn-primary" style={{ width: '100%' }}>Book Session</Link>
        </div>

        <div className="glass-card flex-col items-center text-center">
          <div style={{ ...styles.iconWrapper, background: 'linear-gradient(135deg, var(--accent-color), var(--secondary-color))' }}>
            <Briefcase size={48} color="white" />
          </div>
          <h2 style={{ marginBottom: '1rem' }}>Corporate Wellness Index</h2>
          <p style={{ opacity: 0.8, marginBottom: '1.5rem', flex: 1 }}>
            We evaluate the collective well-being ecosystem of your organization (schools, universities, corporate offices) and provide a comprehensive Institutional Wellness Index.
          </p>
          <ul style={{ textAlign: 'left', opacity: 0.8, marginBottom: '2rem', paddingLeft: '1.5rem', width: '100%' }}>
            <li>Organizational Burnout Assessment</li>
            <li>Group Mindfulness Workshops</li>
            <li>Ergonomic & Energy Consultations</li>
          </ul>
          <Link to="/booking?type=corporate" className="btn btn-secondary" style={{ width: '100%' }}>Contact Sales</Link>
        </div>
      </div>
      
      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

const styles = {
  iconWrapper: {
    background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
    padding: '1rem',
    borderRadius: '20px',
    marginBottom: '1.5rem',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
  }
}

export default Services;
