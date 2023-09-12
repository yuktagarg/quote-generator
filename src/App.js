import React, { useState } from 'react';
import './App.css';

function App() {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "The only true wisdom is in knowing you know nothing. - Socrates",
  ];

  const [quote, setQuote] = useState('');

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <button onClick={generateQuote}>Generate Quote</button>
      {quote && <p>{quote}</p>}
    </div>
  );
}

export default App;
