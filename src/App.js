import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './css/styles.css';
import ContactModal from './components/ContactModal';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [colorblindMode, setColorblindMode] = useState('normal');
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  // Apply color mode classes
  useEffect(() => {
    document.body.className = `${darkMode ? 'dark' : ''} ${colorblindMode}`;
  }, [darkMode, colorblindMode]);

  return (
    <div className={`app ${darkMode ? 'dark' : ''} ${colorblindMode}`} data-testid="app">
      {isLoading ? (
        <div className="loader">
          <div className="loader-content">
            <div className="spinner"></div>
          </div>
        </div>
      ) : (
        <>
          <Navbar 
            darkMode={darkMode} 
            setDarkMode={setDarkMode}
            colorblindMode={colorblindMode}
            setColorblindMode={setColorblindMode}
            setIsModalOpen={setIsModalOpen}
          />
          <Hero setIsModalOpen={setIsModalOpen} />
          <div className="container">
            <About />
            <Projects />
            <Skills id="skills" />
          </div>
          <Footer />
          <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
      )}
    </div>
  );
}

export default App;