import React from 'react';
import '../styles/About.css';
import Image from 'next/image';


const About = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Me</h1>
        <p>A little about who I am and what I do.</p>
      </section>

      <section className="about-content">
        <div className="about-image">
          <Image
            src="/images/myimg.png" 
            alt="Description of the image"
            width={500} 
            height={300}
           
          />
          
        </div>
        <div className="about-text">
          <h2>Hi, I'm Muhammad Abrar</h2>
          <p>
            I am a passionate web developer and designer with a strong focus on creating visually stunning and user-friendly websites. With a background in Software Engineering, I bring both technical expertise and creative insight to every project I work on.
          </p>
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>JavaScript</li>
            <li>React</li>
            <li>CSS &amp; Sass</li>
            <li>UI/UX Design</li>
            <li>Responsive Design</li>
            <li>API Integration</li>
          </ul>
        </div>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div className="experience-cards">
          <div className="card">
            <h3>Company 1</h3>
            <p>I worked as a UI/UX Designer</p>
          </div>
          <div className="card">
            <h3>Company 2</h3>
            <p>I worked as a Web Developer</p>
          </div>
          <div className="card">
            <h3>Company 3</h3>
            <p>I worked as a Web Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
