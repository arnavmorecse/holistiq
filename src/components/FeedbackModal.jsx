import React, { useState } from 'react';
import { Star, X } from 'lucide-react';

const FeedbackModal = ({ context, onClose, inline = false }) => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) return;
    
    // Simulate backend submission
    console.log(`Feedback for ${context}:`, { rating, comment });
    
    // Mark as submitted
    localStorage.setItem(`holistiq_feedback_${context.toLowerCase()}`, 'submitted');
    setSubmitted(true);
    
    setTimeout(() => {
      if (onClose) onClose();
    }, 2000);
  };

  if (submitted) {
    return (
      <div style={inline ? styles.inlineContainer : styles.overlay}>
        <div className="glass-card flex-col items-center justify-center text-center animate-fade-in" style={inline ? styles.inlineModal : styles.modal}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Thank You!</h2>
          <p style={{ opacity: 0.8 }}>Your feedback helps us improve the {context} experience.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={inline ? styles.inlineContainer : styles.overlay} className="animate-fade-in">
      <div className="glass-card flex-col relative" style={inline ? styles.inlineModal : styles.modal}>
        {!inline && (
          <button onClick={onClose} style={styles.closeButton}>
            <X size={24} color="var(--text-color)" />
          </button>
        )}
        
        <h2 style={{ marginBottom: '1rem', color: 'var(--text-color)' }}>How was your experience?</h2>
        <p style={{ opacity: 0.8, marginBottom: '2rem' }}>Please rate the {context} process.</p>
        
        <form onSubmit={handleSubmit} className="flex-col">
          <div className="flex gap-1 justify-center" style={{ marginBottom: '2rem' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={40}
                color={(hovered || rating) >= star ? 'var(--accent-color)' : 'var(--border-color)'}
                fill={(hovered || rating) >= star ? 'var(--accent-color)' : 'transparent'}
                style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                onMouseEnter={() => setHovered(star)}
                onMouseLeave={() => setHovered(0)}
                onClick={() => setRating(star)}
              />
            ))}
          </div>

          <textarea
            placeholder="Any additional comments? (Optional)"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={styles.textarea}
            rows={4}
          />
          
          <div className="flex justify-between gap-1" style={{ marginTop: '1.5rem' }}>
            {(!inline || onClose) && (
              <button type="button" onClick={onClose} className="btn" style={{ flex: 1, backgroundColor: 'transparent', border: '1px solid var(--border-color)' }}>
                Skip
              </button>
            )}
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ flex: 1, opacity: rating === 0 ? 0.5 : 1, cursor: rating === 0 ? 'not-allowed' : 'pointer' }}
              disabled={rating === 0}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(30, 41, 59, 0.4)',
    backdropFilter: 'blur(4px)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem'
  },
  inlineContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem 0',
    width: '100%'
  },
  modal: {
    width: '100%',
    maxWidth: '500px',
    padding: '3rem',
    backgroundColor: 'rgba(255, 255, 255, 0.95)'
  },
  inlineModal: {
    width: '100%',
    maxWidth: '800px',
    padding: '3rem',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: '2px dashed var(--border-color)'
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    opacity: 0.6
  },
  textarea: {
    width: '100%',
    padding: '1rem',
    borderRadius: '12px',
    border: '2px solid var(--border-color)',
    outline: 'none',
    fontFamily: 'inherit',
    fontSize: '1rem'
  }
};

export default FeedbackModal;
