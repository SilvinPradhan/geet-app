import React from 'react';
import './App.css';
import Login from './components/Login/Login.js';

function App() {
  return (
    // BEM convention
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
