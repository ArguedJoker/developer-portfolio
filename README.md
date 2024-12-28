# Developer Portfolio

A modern, responsive portfolio website built with React, featuring dark mode, colorblind accessibility, and EmailJS integration.

## Features

- 🌙 Dark/Light mode toggle
- 👁️ Colorblind accessibility modes
- ⚡ Interactive UI with typewriter effect
- 📱 Fully responsive design
- 📧 Contact form with EmailJS
- 🎨 Dynamic project showcase
- 💻 Skills visualization

## Tech Stack

- React 17
- Webpack 5
- Bootstrap 5
- EmailJS
- Font Awesome
- CSS Variables
- Intersection Observer API

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm/yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ArguedJoker/developer-portfolio.git
cd developer-portfolio

2. Install dependencies

npm install
```
3. Create .env file:

```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
```

4. Start development server:

```bash
npm run dev
```

Visit http://localhost:3001

### Building for Production

```bash
npm run build

```

### Project Structure

developer-portfolio/
├── public/
│   ├── images/
│   └── index.html
├── src/
│   ├── components/
│   ├── css/
│   ├── App.js
│   └── index.js
└── webpack.config.js

### Accessibility Features

- Colour Blind modes (Deuteranopia Support)
- ARIA labels for enhanced screen reader support
- Semantic HTML structure
- Keyboard navigation support
- High contrast mode support

### Contact Form Setup

1. Create EmailJS account
2. Set up email template
3. Add credentials to .env file
4. Test contact form functionality

### Development Commands
```bash
# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Check for lint errors
npm run lint

```

### Author

Rohan Chauhan

### License

This project is licensed under the MIT License