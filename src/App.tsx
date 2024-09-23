import React from 'react';
import WelcomeMessage from './components/welcome/WelcomeMessage';
import Navbar from './components/navbar/Navbar';
import './styles/global.css';
import About from './components/about/About';
import Career from './components/career/Career';

const App: React.FC = () => {
  return <>
    <nav id="nav">
      <Navbar />
      <WelcomeMessage />
    </nav>
    <main>
      <About />
      <Career />
    </main>
  </>
};

export default App;
