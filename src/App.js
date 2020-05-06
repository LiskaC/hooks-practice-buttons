import React from 'react';
import './App.css';

import ButtonFunction from './ButtonTextChangeFunction';
import ButtonInline from './ButtonTextChangeInline';

function App() {
  return (
    <div className="App">
      <header className="hooksPractice">
        <p>
          <ButtonFunction />
          <ButtonInline />
        </p>
      </header>
    </div>
  );
}

export default App;
