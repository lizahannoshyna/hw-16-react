import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className="stats-list">
    <li className="stats-item">Good: {good}</li>
    <li className="stats-item">Neutral: {neutral}</li>
    <li className="stats-item">Bad: {bad}</li>
    <li className="stats-item">Total: {total}</li>
    <li className="stats-item">Positive feedback: {positivePercentage}%</li>
  </ul>
);
export default Statistics;