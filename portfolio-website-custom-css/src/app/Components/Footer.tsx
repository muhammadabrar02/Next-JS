// src/components/Footer.js

import React from 'react';
import '../styles/Footer.css'; // Ensure you create this CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Muhammad Abrar. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/muhammadabrar02" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/muhammadabrar009/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
