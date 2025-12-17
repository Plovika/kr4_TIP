import React, { useState } from 'react';
import './App.css';
import quotes from './data/quotes';

function App() {
    const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function handleNewQuote() {
        setCurrentQuote(getRandomQuote());
    }

    return (
        <div className="app">
            <div className="quote-box">
                <div className="quote-text">
                    <p>"{currentQuote.text}"</p>
                </div>
                <div className="quote-author">
                    <p>- {currentQuote.author}</p>
                </div>
                <button
                    className="new-quote-btn"
                    onClick={handleNewQuote}
                >
                    Новая цитата
                </button>
            </div>
        </div>
    );
}

export default App;