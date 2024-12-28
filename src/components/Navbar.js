import React, { useState, useEffect } from 'react';
import Tooltip from './Tooltip';

const Navbar = ({ darkMode, setDarkMode, colorblindMode, setColorblindMode, setIsModalOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDarkModeTooltip, setShowDarkModeTooltip] = useState(false);
  const [showColorBlindTooltip, setShowColorBlindTooltip] = useState(false);

  useEffect(() => {
    console.log('Initializing tooltips');
    // Show tooltips on first visit
    if (!localStorage.getItem('tooltipsShown')) {
      console.log('Showing tooltips');
      setShowDarkModeTooltip(true);
      setShowColorBlindTooltip(true);
      
      // Hide tooltips after 5 seconds
      setTimeout(() => {
        console.log('Hiding tooltips');
        setShowDarkModeTooltip(false);
        setShowColorBlindTooltip(false);
        localStorage.setItem('tooltipsShown', 'true');
      }, 5000);
    }
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const toggleColorblindMode = () => {
    const modes = ['normal', 'deuteranopia', 'protanopia', 'tritanopia'];
    const currentIndex = modes.indexOf(colorblindMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setColorblindMode(modes[nextIndex]);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">RC</a>
        
        <div className="theme-controls">
          <div className="tooltip-container">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="theme-toggle"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <div className={`tooltip ${showDarkModeTooltip ? 'show' : ''}`}>
              Click for better night time viewing
            </div>
          </div>
          <div className="tooltip-container">
            <button 
              onClick={toggleColorblindMode}
              className="accessibility-toggle"
              aria-label="Toggle colorblind mode"
            >
              👁️
            </button>
            <div className={`tooltip ${showColorBlindTooltip ? 'show' : ''}`}>
              Click to adjust colors for colorblind visibility
            </div>
          </div>
        </div>

        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div 
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} 
          id="navbarNav"
          data-testid="navbar-nav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleContactClick}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;