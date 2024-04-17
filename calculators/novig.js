import React, { useState } from 'react';

function ProbCalculator() {
  const [favorite, setFavorite] = useState('');
  const [underdog, setUnderdog] = useState('');
  const [result, setResult] = useState('');

  const calculateProb = (favorite, underdog) => {
    let resultFav;
    let resultUnd;
    let oddsFav;
    let oddsUnd;
    let favoriteProb;
    let underdogProb;
    let odds;
    favorite = parseFloat(favorite);
    underdog = parseFloat(underdog);
    if (favorite < -100 && underdog > 100) {
      favorite = favorite * -1.0;
      favoriteProb = favorite / ((favorite + 100.0));
      favoriteProb *= 100.0;

      underdogProb = 100 / ((underdog + 100.0));
      underdogProb *= 100.0;

      resultFav = (favoriteProb / (favoriteProb + underdogProb)) * 100.0;
      resultUnd = (underdogProb / (underdogProb + favoriteProb)) * 100.0;
      odds = (100.0 / (resultUnd / 100.0)) - 100.0;
      setResult(
        `Favorite = ${resultFav.toFixed(2)}% Underdog = ${resultUnd.toFixed(2)}%`
      );
    } else if (underdog <= 100) {
      setResult('Underdog must be greater than 100');
    } else if (favorite >= -100) {
      setResult('Favorite must be less than -100');
    } else {
      setResult('Please enter a number');
    }
  };

  const handleFavoriteChange = (e) => {
    setFavorite(e.target.value);
  };

  const handleUnderdogChange = (e) => {
    setUnderdog(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateProb(favorite, underdog);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Favorite:
          <input
            type="text"
            value={favorite}
            onChange={handleFavoriteChange}
          />
        </label>
        <label>
          Underdog:
          <input
            type="text"
            value={underdog}
            onChange={handleUnderdogChange}
          />
        </label>
        <button type="submit">Calculate</button>
      </form>
      <div id="result">{result}</div>
    </div>
  );
}

export default ProbCalculator;
