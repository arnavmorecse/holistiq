import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav style={styles.nav}>
      <div className="app-container flex justify-between items-center" style={styles.container}>
        <Link to="/" className="flex items-center gap-1" style={{ ...styles.logo, marginRight: '2rem' }}>
          <Leaf color="var(--primary-color)" size={28} />
          <span style={styles.brandName}>HolistiQ</span>
        </Link>
        <div className="flex gap-2 items-center">
          <Link to="/" style={styles.link} className={isActive('/')}>Home</Link>
          <Link to="/methodology" style={styles.link} className={isActive('/methodology')}>Methodology</Link>
          <Link to="/services" style={styles.link} className={isActive('/services')}>Services</Link>
          <Link to="/assessment" style={styles.link} className={isActive('/assessment')}>Assessment</Link>
          <Link to="/dashboard" style={styles.link} className={isActive('/dashboard')}>Dashboard</Link>
          <Link to="/booking" className="btn btn-primary" style={{ marginLeft: '1rem' }}>Book Session</Link>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '80px',
    background: 'rgba(244, 249, 244, 0.9)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid var(--border-color)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    overflowX: 'auto',
    whiteSpace: 'nowrap'
  },
  container: {
    width: '100%',
    height: '100%',
  },
  logo: {
    textDecoration: 'none',
  },
  brandName: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--primary-color)',
    letterSpacing: '-0.5px',
  },
  link: {
    fontWeight: 500,
    color: 'var(--text-color)',
    opacity: 0.8,
  }
};

export default Navbar;
