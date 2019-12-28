import React from 'react';
import logo from './logo.svg';
import './App.css';

// Import Components
import Header from './components/elements/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <Header />
     <Home />
    </div>
  );
}

export default App;
