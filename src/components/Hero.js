import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = ({ setIsModalOpen }) => {
    const handleContactClick = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    return (
        <div className="hero">
            <div className="hero-content">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('<h1>Hi, I\'m Rohan</h1>')
                            .pauseFor(1000)
                            .typeString('<p>A Full Stack Developer specialized in AI-enhanced applications</p>')
                            .start();
                    }}
                    options={{
                        cursor: '|',
                        delay: 75,
                        loop: false,
                        html: true,
                        wrapperClassName: 'typewriter-text'
                    }}
                />
                <div className="hero-cta">
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-secondary" onClick={handleContactClick}>Get In Touch</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;