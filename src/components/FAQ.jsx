import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is an Energy Diagnostic?",
    answer: "Our energy diagnostic uses advanced algorithms and qualitative self-reporting to assess your physical, mental, and restorative wellness. We translate these metrics into a visual, interactive format to help you understand your overall balance."
  },
  {
    question: "How do you integrate AI with Ayurveda?",
    answer: "We use modern AI pattern recognition to analyze holistic health data. By mapping these patterns to ancient Ayurvedic principles like Doshas and energy flow, we provide personalized, data-driven wellness recommendations."
  },
  {
    question: "Are the recommendations personalized?",
    answer: "Yes! Every priority action plan generated on your dashboard is specifically tailored to the unique scores gathered during your assessment."
  },
  {
    question: "How long does an in-person assessment take?",
    answer: "Our typical in-person booking takes about 45 minutes. This includes a comprehensive evaluation, acupressure consultation, and a deep dive into your personal energy metrics."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '4rem auto 2rem', padding: '0 1rem' }}>
      <h2 className="text-center" style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--primary-color)' }}>Frequently Asked Questions</h2>
      <div className="flex-col gap-1">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="glass-card" 
              style={{ 
                padding: '1.5rem', 
                cursor: 'pointer',
                borderLeft: isOpen ? '4px solid var(--secondary-color)' : '1px solid rgba(255,255,255,0.8)'
              }}
              onClick={() => toggleOpen(index)}
            >
              <div className="flex justify-between items-center">
                <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-color)' }}>{faq.question}</h3>
                {isOpen ? <ChevronUp size={24} color="var(--secondary-color)" /> : <ChevronDown size={24} color="var(--primary-color)" />}
              </div>
              {isOpen && (
                <div style={{ marginTop: '1rem', opacity: 0.8, lineHeight: 1.6, animation: 'fadeIn 0.3s ease' }}>
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
