import React, { useRef, useEffect } from 'react';

const About = () => {
    const sectionRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="about-section" ref={sectionRef}>
            <h2>About Me</h2>
            <div className="about-grid">
                <div className="about-card">
                    <i className="fas fa-code about-icon"></i>
                    <h3>Developer</h3>
                    <p>Passionate developer focused on AI-enhanced applications with expertise in modern web technologies.</p>
                </div>

                <div className="about-card">
                    <i className="fas fa-cloud about-icon"></i>
                    <h3>DevOps</h3>
                    <p>Experience in cloud services and CI/CD pipelines ensuring smooth deployment processes.</p>
                </div>

                <div className="about-card">
                    <i className="fas fa-robot about-icon"></i>
                    <h3>AI Enthusiast</h3>
                    <p>Dedicated to implementing AI solutions that solve real-world problems.</p>
                </div>
            </div>
        </section>
    );
};

export default About;