import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EnergyOrb from '../components/EnergyOrb';
import { Activity, Brain, Sprout, ShieldCheck } from 'lucide-react';

const Home = () => {
  const [mousePos, setMousePos] = useState(null);

  const handleMouseMove = (e) => {
    // Normalize coordinates to -1 to 1 based on viewport
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section 
        className="app-container flex-col items-center justify-center text-center relative" 
        style={{ padding: '6rem 0', minHeight: '80vh', overflow: 'hidden' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        
        {/* Background Orb */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <EnergyOrb isInteractive={true} mousePos={mousePos} />
        </div>

        <div style={{ zIndex: 1, pointerEvents: 'none' }}>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem', color: 'var(--text-color)' }}>
            Elevate Your <span className="text-gradient">Wellness</span> Through Science & AI
          </h1>
          <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            HolistiQ integrates ancient wisdom like Ayurveda and acupressure with modern quantum energy diagnostics to provide you with a personalized path to optimal health.
          </p>
          <div className="flex gap-1 justify-center" style={{ pointerEvents: 'auto' }}>
            <Link 
              to="/assessment" 
              className="btn btn-primary"
            >
              Start Assessment
            </Link>
            <Link 
              to="/methodology" 
              className="btn btn-secondary"
            >
              Our Methodology
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ backgroundColor: 'white', padding: '5rem 0' }}>
        <div className="app-container text-center">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>A Comprehensive Approach</h2>
          <div className="grid grid-cols-3 gap-2">
            <div className="glass-card flex-col items-center">
              <Brain size={48} color="var(--primary-color)" className="mb-1" />
              <h3>AI-Driven Insights</h3>
              <p style={{ opacity: 0.8, marginTop: '0.5rem' }}>Advanced algorithms analyze your data to uncover deep wellness patterns and create precise recommendations.</p>
            </div>
            <div className="glass-card flex-col items-center">
              <Sprout size={48} color="var(--primary-color)" className="mb-1" />
              <h3>Holistic Roots</h3>
              <p style={{ opacity: 0.8, marginTop: '0.5rem' }}>Integrating time-tested practices from Ayurveda and acupressure to ensure balance of mind, body, and spirit.</p>
            </div>
            <div className="glass-card flex-col items-center">
              <Activity size={48} color="var(--primary-color)" className="mb-1" />
              <h3>Energy Diagnostics</h3>
              <p style={{ opacity: 0.8, marginTop: '0.5rem' }}>Quantifying wellness through modern scientific principles inspired by quantum mechanics for real results.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="app-container text-center" style={{ padding: '5rem 2rem' }}>
        <div className="glass-card" style={{ background: 'var(--primary-color)', borderColor: 'transparent' }}>
          <ShieldCheck size={48} color="white" className="mb-1" style={{ margin: '0 auto' }} />
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to transform your organizational or individual wellbeing?</h2>
          <p style={{ color: 'white', opacity: 0.9, marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            We provide actionable wellness indices for both individuals and institutions. Discover your personalized report today.
          </p>
          <Link to="/assessment" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary-color)' }}>
            Take the Wellness Test
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
