import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_name: 'Rohan',  // Add recipient name if needed
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      onSubmit?.(formData);
    } catch (error) {
      setStatus('error');
      console.error('Email send failed:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} aria-label="Contact form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button 
          type="submit" 
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {status === 'success' && (
        <div className="alert alert-success">
          Message sent successfully!
        </div>
      )}
      {status === 'error' && (
        <div className="alert alert-error">
          Failed to send message. Please try again.
        </div>
      )}
      <div className="social-icons">
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
    </div>
  );
};

export default Contact;