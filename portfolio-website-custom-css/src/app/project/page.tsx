import React from 'react';
import '../styles/Project.css';

const Project = () => {
    const projects = [
        {
            title: "Project One",
            description: "A brief description of what Project One is about.",
            image: "project1.png", // Replace with your project image URL
            link: "https://yourprojectlink.com", // Replace with your project link
        },
        {
            title: "Project Two",
            description: "A brief description of what Project Two is about.",
            image: "project2.png",
            link: "https://yourprojectlink.com",
        },
        {
            title: "Project Three",
            description: "A brief description of what Project Three is about.",
            image: "project3.png",
            link: "https://yourprojectlink.com",
        },
        // Add more projects as needed
    ];

    return (
        <div className="projects-container">
            <section className="projects-header">
                <h1>My Projects</h1>
                <p>Explore my work and the projects I've created.</p>
            </section>

            <section className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Project;
