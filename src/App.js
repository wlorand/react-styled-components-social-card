import React from 'react';

// styled components
import { ThemeProvider } from 'styled-components';

// child components
import SocialCard from './components/SocialCard';
// styles
import './app.css';

// styled components theme
const redTheme = {
  primary: 'red',
};

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={redTheme}>
        <header className="app-header">
          <h1>Styled Components Starter</h1>
        </header>
        <SocialCard />
      </ThemeProvider>
    </div>
  );
}

export default App;
