import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="button-list">
    {options.map(option => (
      <button 
        key={option} 
        type="button" 
        onClick={() => onLeaveFeedback(option)}
        style={{ textTransform: 'capitalize', cursor: 'pointer' }}
      >
        {option}
      </button>
    ))}
  </div>
);
export default FeedbackOptions;