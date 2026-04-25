import React from 'react';
import { Search, PenTool, Lightbulb, MonitorPlay, Beaker } from 'lucide-react';

const Methodology = () => {
  return (
    <div className="app-container animate-fade-in" style={{ padding: '3rem 2rem' }}>
      <div className="text-center mb-2">
        <h1 style={{ marginBottom: '1rem', fontSize: '3rem', color: 'var(--primary-color)' }}>Our Design Thinking Approach</h1>
        <p style={{ opacity: 0.8, maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
          HolistiQ was built using a rigorous, human-centered Design Thinking methodology to ensure that our platform solves real wellness challenges effectively.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2" style={{ marginTop: '3rem' }}>
        <div className="glass-card">
          <div className="flex items-center gap-1 mb-1">
            <div style={{ ...styles.iconBox, backgroundColor: '#e3f2fd' }}><Search color="#1e88e5" /></div>
            <h2 style={{ color: '#1e88e5' }}>1. Empathy</h2>
          </div>
          <p style={{ opacity: 0.8 }}>We conducted deep research into the daily lives of individuals facing burnout, stress, and energy depletion. By understanding their struggles, we learned that a purely medical approach is often intimidating and disconnected from daily habits.</p>
        </div>

        <div className="glass-card">
          <div className="flex items-center gap-1 mb-1">
            <div style={{ ...styles.iconBox, backgroundColor: '#fce4ec' }}><PenTool color="#d81b60" /></div>
            <h2 style={{ color: '#d81b60' }}>2. Define</h2>
          </div>
          <p style={{ opacity: 0.8 }}>We defined our core problem statement: How might we create an accessible, science-backed platform that accurately diagnoses energy levels and provides actionable, holistic recommendations without overwhelming the user?</p>
        </div>

        <div className="glass-card">
          <div className="flex items-center gap-1 mb-1">
            <div style={{ ...styles.iconBox, backgroundColor: '#fff8e1' }}><Lightbulb color="#ffb300" /></div>
            <h2 style={{ color: '#ffb300' }}>3. Ideation</h2>
          </div>
          <p style={{ opacity: 0.8 }}>Our team brainstormed diverse solutions, ultimately combining AI-driven data analysis with ancient practices like Ayurveda and Acupressure. We conceptualized the "Energy Diagnostics" framework and the interactive 3D visualizations.</p>
        </div>

        <div className="glass-card">
          <div className="flex items-center gap-1 mb-1">
            <div style={{ ...styles.iconBox, backgroundColor: '#e8f5e9' }}><MonitorPlay color="#43a047" /></div>
            <h2 style={{ color: '#43a047' }}>4. Prototype</h2>
          </div>
          <p style={{ opacity: 0.8 }}>We built this interactive web platform (HolistiQ) as our functional prototype, featuring a seamless assessment module and a dynamic dashboard that calculates real-time wellness indices based on user input.</p>
        </div>

        <div className="glass-card" style={{ gridColumn: '1 / -1' }}>
          <div className="flex items-center gap-1 mb-1">
            <div style={{ ...styles.iconBox, backgroundColor: '#f3e5f5' }}><Beaker color="#8e24aa" /></div>
            <h2 style={{ color: '#8e24aa' }}>5. Testing</h2>
          </div>
          <p style={{ opacity: 0.8 }}>We continuously test the platform with initial users to validate the accuracy of the wellness scoring algorithm, improve the UI/UX, and refine our recommendation engine to ensure maximum commercial and practical value.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  iconBox: {
    padding: '0.8rem',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default Methodology;
