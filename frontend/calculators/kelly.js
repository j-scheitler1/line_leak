import React, { useState } from 'react';

function BetCalculator() {
  const [odds, setOdds] = useState('');
  const [chances, setChances] = useState('');
  const [balance, setBalance] = useState('');
  const [result, setResult] = useState('');

  const calculateProb = (odds, chances, balance) => {
    odds = parseFloat(odds);
    chances = parseFloat(chances);
    balance = parseFloat(balance);

    if (balance < 0) {
      setResult('Balance must be greater than 0');
    } else if (chances < 0 || chances > 100) {
      setResult('Chances of Winning must be between 0-100');
    } else if (odds <= -100) {
      odds = odds * -1;
      odds = odds - 1;
      chances = chances / 100;
      let calculatedResult = ((odds * chances) - (1 - chances)) / odds;
      calculatedResult *= 100.0;
      let betAmount = balance * (calculatedResult / 100);
      setResult(
        `You should bet ${calculatedResult.toFixed(1)}% of your account balance. Which means you should place a bet of $${betAmount.toFixed(2)}.`
      );
    } else if (odds >= 100) {
      odds = odds - 1.0;
      chances = chances / 100.0;
      let calculatedResult = ((odds * chances) - (1.0 - chances)) / odds;
      calculatedResult *= 100.0;
      let betAmount = balance * (calculatedResult / 100);
      setResult(
        `You should bet ${calculatedResult.toFixed(2)}% of your account balance. Which means you should place a bet of $${betAmount.toFixed(2)}.`
      );
    } else {
      setResult('Odds must be less than -100 or greater than 100');
    }
  };

  const handleOddsChange = (e) => {
    setOdds(e.target.value);
  };

  const handleChancesChange = (e) => {
    setChances(e.target.value);
  };

  const handleBalanceChange = (e) => {
    setBalance(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateProb(odds, chances, balance);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Odds:
          <input type="text" value={odds} onChange={handleOddsChange} />
        </label>
        <label>
          Chances of Winning (%):
          <input type="text" value={chances} onChange={handleChancesChange} />
        </label>
        <label>
          Account Balance ($):
          <input type="text" value={balance} onChange={handleBalanceChange} />
        </label>
        <button type="submit">Calculate</button>
      </form>
      <div id="result">{result}</div>
    </div>
  );
}

export default BetCalculator;
