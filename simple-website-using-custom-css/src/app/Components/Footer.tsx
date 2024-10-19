import React from 'react'
import "../Styles/Footer.css";

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-container">
                    <div className="left">
                        <h1>Get in Touch</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit perferendis incidunt officiis dicta quisquam ipsum dolorem nulla, ratione laboriosam optio corrupti fuga provident delectus.</p>
                        <h3>Contact Us:</h3>
                        <p>Email: info@ecowavesolutions.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>

                    <div className="right">
                        <h3>Follow Us:</h3>
                        <div className="social-links">
                            <a href="#" className="social-icon">Facebook</a>
                            <a href="#" className="social-icon">Twitter</a>
                            <a href="#" className="social-icon">Instagram</a>
                            <a href="#" className="social-icon">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    )
}
