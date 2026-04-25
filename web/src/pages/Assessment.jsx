import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Battery, Moon, Heart, Coffee, Brain, Sun, Shield } from 'lucide-react';

// Qualitative Questions mapping to 3 pillars: Physical, Mental, Restorative
const questions = [
  { id: 1, text: "I feel well-rested when I wake up in the morning.", category: "restorative", icon: Moon, reverse: false },
  { id: 2, text: "I frequently feel overwhelmed or unable to focus on tasks.", category: "mental", icon: Brain, reverse: true },
  { id: 3, text: "My body feels energetic and capable of handling physical demands.", category: "physical", icon: Battery, reverse: false },
  { id: 4, text: "I often experience mid-day energy crashes or extreme fatigue.", category: "restorative", icon: Sun, reverse: true },
  { id: 5, text: "I am able to manage my emotional responses effectively.", category: "mental", icon: Heart, reverse: false },
  { id: 6, text: "My daily diet leaves me feeling nourished rather than heavy or sluggish.", category: "physical", icon: Coffee, reverse: false },
  { id: 7, text: "I engage in movement or exercise that feels good for my body.", category: "physical", icon: Activity, reverse: false },
  { id: 8, text: "I find it difficult to disconnect from work or worries before bed.", category: "restorative", icon: Shield, reverse: true },
];

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleSelect = (value) => {
    setAnswers({ ...answers, [questions[currentStep].id]: value });
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      calculateAndFinish({ ...answers, [questions[currentStep].id]: value });
    }
  };

  const calculateAndFinish = (finalAnswers) => {
    const scores = { physical: 0, mental: 0, restorative: 0 };
    const counts = { physical: 0, mental: 0, restorative: 0 };

    questions.forEach((q) => {
      const val = finalAnswers[q.id];
      const adjustedVal = q.reverse ? (6 - val) : val; // 1-5 scale
      scores[q.category] += adjustedVal;
      counts[q.category] += 1;
    });
    
    // Scale each to 100
    const finalScores = {
      physical: Math.round((scores.physical / (counts.physical * 5)) * 100),
      mental: Math.round((scores.mental / (counts.mental * 5)) * 100),
      restorative: Math.round((scores.restorative / (counts.restorative * 5)) * 100),
    };
    
    const overallScore = Math.round((finalScores.physical + finalScores.mental + finalScores.restorative) / 3);

    // Save to localStorage
    localStorage.setItem('holistiq_scores', JSON.stringify({ overall: overallScore, ...finalScores }));
    
    navigate('/dashboard?from=assessment');
  };

  const CurrentIcon = questions[currentStep].icon;

  return (
    <div className="app-container animate-fade-in" style={{ padding: '4rem 2rem', maxWidth: '800px' }}>
      <div className="text-center mb-2">
        <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>Energy Diagnostics</h1>
        <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>Rate how much you agree with the following statements.</p>
      </div>

      <div className="glass-card flex-col items-center justify-center" style={{ minHeight: '350px', padding: '3rem' }}>
        <div style={{ marginBottom: '2rem', display: 'flex', gap: '0.2rem', width: '100%' }}>
          {questions.map((_, i) => (
            <div 
              key={i} 
              style={{ 
                height: '6px', 
                flex: 1, 
                backgroundColor: i <= currentStep ? 'var(--secondary-color)' : 'var(--border-color)',
                borderRadius: '3px',
                transition: 'background-color 0.3s ease'
              }}
            />
          ))}
        </div>

        <CurrentIcon size={64} color="var(--primary-color)" style={{ marginBottom: '1.5rem' }} />
        
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem' }}>
          "{questions[currentStep].text}"
        </h2>

        <div className="flex gap-1" style={{ flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
          {[1, 2, 3, 4, 5].map((val) => (
            <button
              key={val}
              onClick={() => handleSelect(val)}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '2px solid var(--secondary-color)',
                backgroundColor: answers[questions[currentStep].id] === val ? 'var(--secondary-color)' : 'transparent',
                color: answers[questions[currentStep].id] === val ? 'white' : 'var(--text-color)',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {val}
            </button>
          ))}
        </div>
        <p style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '400px', marginTop: '1.5rem', opacity: 0.6, fontSize: '0.9rem', fontWeight: 'bold' }}>
          <span>Strongly Disagree</span>
          <span>Strongly Agree</span>
        </p>
      </div>
    </div>
  );
};

export default Assessment;
