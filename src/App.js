import React from 'react';
import './App.css';

// Import Components
import Header from './components/elements/Header';
import Home from './components/Home';

import { GlobalStyle } from './components/styles/GlobalStyles';

function App() {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyle />    
    </>
  );
}

export default App;
