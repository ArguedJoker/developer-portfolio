import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/styles.css';
import { init } from '@emailjs/browser';

// Initialize EmailJS with public key from environment variable
if (process.env.REACT_APP_EMAILJS_PUBLIC_KEY) {
  init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);