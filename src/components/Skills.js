import React from 'react';

const Skills = () => {
    const skills = [
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'React', level: 'Advanced' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Python', level: 'Intermediate' },
        { name: 'HTML/CSS', level: 'Advanced' },
        { name: 'Git', level: 'Advanced' },
        { name: 'AWS', level: 'Intermediate' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'SQL', level: 'Intermediate' },
        { name: 'DevOps', level: 'Intermediate' }
    ];

    return (
        <section id="skills" className="skills-section">
            <h2>Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skills-badge">
                        <span className="skill-name">{skill.name}:</span>
                        {' '}
                        <span className="skill-level">{skill.level}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;