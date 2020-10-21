import React from 'react';

// child components
import SocialCard from './components/SocialCard';
// styles
import './app.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Styled Components Starter</h1>
      </header>
      <SocialCard />
    </div>
  );
}

export default App;
