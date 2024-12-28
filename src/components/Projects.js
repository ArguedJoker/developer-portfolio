import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Gazetteer Project',
            description: 'A web application that utilizes various APIs to provide geographical information.',
            image: '/images/gazetteer.png',
            githubLink: 'https://github.com/ArguedJoker/RohanPSChauhan-Project1',
            liveLink: 'https://example.com/gazetteer',
            techStack: ['PHP', 'JavaScript', 'Bootstrap', 'APIs'],
            features: [
                'Integration with OpenCage API for location data',
                'Weather information from OpenWeather API',
                'Mobile-first design with map overlays'
            ]
        },
        {
            title: 'To-Do AI App',
            description: 'An AI-enhanced to-do application with smart task management.',
            image: '/images/todo-ai.png',
            githubLink: 'https://github.com/ArguedJoker/todo-ai',
            liveLink: 'https://example.com/todo-ai',
            techStack: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
            features: [
                'AI-powered task suggestions',
                'Natural language processing',
                'Real-time updates'
            ]
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-image-container">
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="project-image"
                            />
                        </div>
                        <h3>{project.title}</h3>
                        <h4>Description:</h4>
                        <p>{project.description}</p>
                        <h4>Tech Stack:</h4>
                        <ul className="features-list">
                            {project.techStack.map((tech, i) => (
                                <li key={i}>{tech}</li>
                            ))}
                        </ul>
                        <h4>Key Features:</h4>
                        <ul className="features-list">
                            {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        <div className="project-links">
                            <a 
                                href={project.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                View Code
                            </a>
                            <a 
                                href={project.liveLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;