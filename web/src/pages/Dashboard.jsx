import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EnergyOrb from '../components/EnergyOrb';
import { CheckCircle, AlertTriangle, Zap, Leaf, Battery, Brain, Moon } from 'lucide-react';
import FeedbackModal from '../components/FeedbackModal';

const Dashboard = () => {
  const [scores, setScores] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  
  useEffect(() => {
    const savedScores = localStorage.getItem('holistiq_scores');
    if (savedScores) {
      setScores(JSON.parse(savedScores));
    }

    if (!localStorage.getItem('holistiq_feedback_assessment')) {
      setShowFeedback(true);
    }
  }, []);

  if (!scores) {
    return (
      <div className="app-container text-center animate-fade-in" style={{ padding: '5rem 2rem' }}>
        <h2>No Assessment Data Found</h2>
        <p className="mb-2">Please take the wellness assessment to see your dashboard.</p>
        <Link to="/assessment" className="btn btn-primary">Take Assessment</Link>
      </div>
    );
  }

  const getStatus = (score) => {
    if (score >= 80) return { label: 'Optimal', color: 'var(--primary-color)', icon: CheckCircle };
    if (score >= 60) return { label: 'Balanced', color: 'var(--accent-color)', icon: Zap };
    return { label: 'Needs Attention', color: '#e53935', icon: AlertTriangle };
  };

  const overallStatus = getStatus(scores.overall);
  const StatusIcon = overallStatus.icon;

  return (
    <div className="app-container animate-fade-in" style={{ padding: '3rem 2rem' }}>
      <div className="flex justify-between items-center mb-2 flex-responsive">
        <h1 style={{ color: 'var(--text-color)' }}>Your Energy Dashboard</h1>
        <Link to="/booking" className="btn btn-primary">Book Expert Analysis</Link>
      </div>
      
      <div className="grid grid-cols-2 gap-2 dashboard-columns" style={{ alignItems: 'start' }}>
        
        {/* Left Column: Scores & Breakdown */}
        <div className="flex-col gap-2">
          <div className="glass-card flex-col items-center justify-center text-center">
            <h2 style={{ opacity: 0.8, fontSize: '1.2rem', marginBottom: '1rem' }}>Overall Energy Index</h2>
            
            <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: `conic-gradient(${overallStatus.color} ${scores.overall}%, var(--border-color) ${scores.overall}%)`, marginBottom: '1rem' }}>
              <div style={{ position: 'absolute', width: '170px', height: '170px', backgroundColor: 'var(--bg-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <span style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--text-color)' }}>{scores.overall}</span>
                <span style={{ fontSize: '0.9rem', opacity: 0.6 }}>out of 100</span>
              </div>
            </div>
            
            <div className="flex items-center gap-1" style={{ color: overallStatus.color, fontWeight: 'bold', fontSize: '1.2rem' }}>
              <StatusIcon size={24} />
              <span>{overallStatus.label}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1">
            <div className="glass-card text-center" style={{ padding: '1.5rem 1rem' }}>
              <Battery size={24} color="var(--accent-color)" style={{ margin: '0 auto 0.5rem' }} />
              <h4 style={{ fontSize: '0.9rem', opacity: 0.8 }}>Physical</h4>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: getStatus(scores.physical).color }}>{scores.physical}</p>
            </div>
            <div className="glass-card text-center" style={{ padding: '1.5rem 1rem' }}>
              <Brain size={24} color="var(--secondary-color)" style={{ margin: '0 auto 0.5rem' }} />
              <h4 style={{ fontSize: '0.9rem', opacity: 0.8 }}>Mental</h4>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: getStatus(scores.mental).color }}>{scores.mental}</p>
            </div>
            <div className="glass-card text-center" style={{ padding: '1.5rem 1rem' }}>
              <Moon size={24} color="var(--primary-color)" style={{ margin: '0 auto 0.5rem' }} />
              <h4 style={{ fontSize: '0.9rem', opacity: 0.8 }}>Restorative</h4>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: getStatus(scores.restorative).color }}>{scores.restorative}</p>
            </div>
          </div>

          <div className="glass-card">
            <h3 className="flex items-center gap-1" style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>
              <Leaf size={24} /> Priority Action Plan
            </h3>
            <ul style={{ listStyle: 'none', gap: '1rem', display: 'flex', flexDirection: 'column' }}>
              {scores.physical < 70 && (
                <li><strong>Physical Grounding:</strong> Your physical vitality is low. Incorporate 20 mins of mindful movement (Yoga/Tai Chi) daily.</li>
              )}
              {scores.mental < 70 && (
                <li><strong>Mental Clarity:</strong> High mental friction detected. Try Acupressure on the GV20 point (crown of head) to release tension.</li>
              )}
              {scores.restorative < 70 && (
                <li><strong>Deep Recovery:</strong> Your restorative rest is blocked. Consider an Ayurvedic Ashwagandha supplement before bed.</li>
              )}
              {scores.overall >= 70 && (
                <li><strong>Maintain Balance:</strong> Your overall energy is flowing well. Continue your current routines to sustain harmony.</li>
              )}
            </ul>
          </div>
        </div>

        {/* Right Column: Dynamic Visualization & Action Plan */}
        <div className="flex-col gap-2">
          <div className="glass-card text-center flex-col items-center justify-center" style={{ padding: '2rem', height: 'auto', minHeight: 'auto' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Dynamic Energy Flow</h3>
            <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '1rem' }}>
              Yellow: Physical | Blue: Mental | Green: Restorative
            </p>
            <p style={{ opacity: 0.6, fontSize: '0.8rem', maxWidth: '300px', marginBottom: '1.5rem' }}>
              Notice how nodes representing lower scores vibrate more erratically, signifying blocked energy channels. A smooth, slow-moving orb indicates balanced energy.
            </p>
            <div style={{ flex: 1, width: '100%', borderRadius: '12px', overflow: 'hidden', backgroundColor: 'rgba(255,255,255,0.5)', minHeight: '200px' }}>
              <EnergyOrb scores={scores} />
            </div>
          </div>
        </div>
      </div>

      {showFeedback && (
        <div style={{ marginTop: '2rem' }}>
          <FeedbackModal context="Assessment" inline={true} onClose={() => setShowFeedback(false)} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
