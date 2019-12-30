import React from 'react';
import './App.css';
import { Router} from '@reach/router';

// Import Components
import Header from './components/elements/Header';
import Home from './components/Home';
import Movie from './components/elements/Movie';
import NotFound from './components/elements/NotFound';

import { GlobalStyle } from './components/styles/GlobalStyles';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Home path="/" />
        <Movie path="/:movieId" />
        {/* Note that the "/:movieId" name has to be the same in every route and prop otherwise you'll run into an error */}
        {/* A fallback component call not found that the app falls back on if the movie isn't found */}
        <NotFound default />
      </Router>
      
      <GlobalStyle />    
    </>
  );
}

export default App;
