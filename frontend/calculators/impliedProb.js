import React, { useState } from 'react';
import './calculator.css';

function ImpliedProbabilityCalculator() {
  const [odds, setOdds] = useState('');
  const [result, setResult] = useState('');

  const calculateImplied = (odds) => {
    odds = parseInt(odds);

    if (isNaN(odds)) {
      setResult('Please enter a number');
    } else if (odds <= -100) {
      odds = odds * -1;
      const calculatedResult = (odds / (odds + 100)) * 100;
      setResult(`Actual Probability: ${calculatedResult.toFixed(1)}%`);
    } else if (odds >= 100) {
      odds += 100;
      odds *= 100;
      const calculatedResult = (100 / odds) * 10000;
      setResult(`Actual Probability: ${calculatedResult.toFixed(1)}%`);
    } else {
      setResult('Odds must be less than -100 or greater than 100');
    }
  };

  const handleInputChange = (e) => {
    setOdds(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateImplied(odds);
  };

  return (
    <div class="calc_holder">
      <form onSubmit={handleSubmit}>
        <label>
          Odds:
          <input type="text" value={odds} onChange={handleInputChange} />
        </label>
        <button type="submit">Calculate</button>
      </form>
      <div id="result">{result}</div>
    </div>
  );
}

export default ImpliedProbabilityCalculator;
