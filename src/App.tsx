import React from 'react';
import WelcomeMessage from './components/welcome/WelcomeMessage';
import Navbar from './components/navbar/Navbar';
import './styles/global.css';
import About from './components/about/About';
import Career from './components/career/Career';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  return <>
    <nav id="nav">
      <Navbar />
      <WelcomeMessage />
    </nav>
    <main>
      <About />
      <Career />
      <Projects />
    </main>
    <Footer />
  </>
};

export default App;
