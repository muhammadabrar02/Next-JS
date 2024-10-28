import React from 'react';
import '../app/styles/Home.css';


const Home = () => {
    return (
        <div className="home">
          
          
            {/* Hero Section */}
            <section className="hero">
                <div className="intro">
                    <h2>Hello, I'm Muhammad Abrar</h2>
                    <p>Welcome to my portfolio. Here, you’ll find my latest work and projects.</p>
                    <a href="#projects" className="cta">View My Work</a>
                </div>
            </section>

            {/* About Me Section */}
            <section id="about" className="about">
                <h2>About Me</h2>
                <p>I am a passionate developer with skills in web development, UI/UX design, and more. I love creating innovative solutions and building seamless user experiences.</p>
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects">
                <h2>Projects</h2>
                <p>Take a look at some of my recent projects below:</p>
                <div className="project-cards">
                    <div className="card">
                        <h3>Project 1</h3>
                        <p>Short description of project 1.</p>
                    </div>
                    <div className="card">
                        <h3>Project 2</h3>
                        <p>Short description of project 2.</p>
                    </div>
                    <div className="card">
                        <h3>Project 3</h3>
                        <p>Short description of project 3.</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <h2>Contact</h2>
                <p>Feel free to reach out for collaborations or just a friendly chat.</p>
                <a href="mailto:yourname@example.com" className="cta">Get in Touch</a>
            </section>
        </div>
    );
};

export default Home;
