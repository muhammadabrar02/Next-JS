import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <section className="contact-header">
                <h1>Contact Me</h1>
                <p>I'd love to hear from you! Please fill out the form below.</p>
            </section>

            <section className="contact-form-section">
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message"  required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </section>

            <section className="contact-info">
                <h2>Other Ways to Reach Me</h2>
                <p>You can also connect with me on social media:</p>
                <ul className="social-media-links">
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Contact;
