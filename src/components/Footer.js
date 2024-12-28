import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a 
            href="https://github.com/ArguedJoker" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/rohan-p-s-chauhan/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Rohan Chauhan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;