import React, { useState, useRef } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import Section from './Components/Section';
import Notification from './Components/Notification';
import './App.css';

const AppContent = () => {
  const { theme, toggleTheme } = useTheme();
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const statsRef = useRef(null);

  const handleLeaveFeedback = (option) => {
    setFeedback(prev => ({ ...prev, [option]: prev[option] + 1 }));
    if (statsRef.current) {
      statsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

  return (
    <div className={`app-container ${theme}`}>
      <button onClick={toggleTheme} className="theme-toggle-btn">
        Switch to {theme === 'light' ? 'Dark' : 'Light'}
      </button>

      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={Object.keys(feedback)} 
          onLeaveFeedback={handleLeaveFeedback} 
        />
      </Section>

      <div ref={statsRef}>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics 
              good={good} 
              neutral={neutral} 
              bad={bad} 
              total={total} 
              positivePercentage={positivePercentage} 
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;