import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="app-container flex justify-between items-center" style={{ flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>HolistiQ</h3>
          <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>AI-driven wellness assessment platform integrating science, Ayurveda, and energy diagnostics.</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} HolistiQ. All rights reserved.</p>
          <p style={{ opacity: 0.6, fontSize: '0.8rem', marginTop: '0.5rem' }}>Designed with Design Thinking</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'var(--text-color)',
    color: 'white',
    padding: '3rem 0',
    marginTop: 'auto',
  }
};

export default Footer;
