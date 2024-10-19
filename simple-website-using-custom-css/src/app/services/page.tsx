import React from 'react'
import "../Styles/Services.css"

export default function Services() {
    return (
        <div>
            <section className="service-boxes">
                <h2>Our Services</h2>
                <div className="service-container">
                    <div className="service-box">
                        <h3>Web Development</h3>
                        <p>
                            Create stunning websites that are responsive and user-friendly. Our web development services
                            focus on quality and performance to give your users the best experience.
                        </p>
                        <h4>Key Features:</h4>
                        <ul>
                            <li>Custom Design</li>
                            <li>SEO Optimized</li>
                            <li>Fast Loading Speed</li>
                            <li>Responsive Layouts</li>
                        </ul>
                    </div>

                    <div className="service-box">
                        <h3>Digital Marketing</h3>
                        <p>
                            Boost your brand’s visibility and engage your audience with our digital marketing strategies.
                            We offer tailored solutions to meet your business goals.
                        </p>
                        <h4>Key Features:</h4>
                        <ul>
                            <li>Social Media Management</li>
                            <li>Email Campaigns</li>
                            <li>Content Marketing</li>
                            <li>Analytics Tracking</li>
                        </ul>
                    </div>

                    <div className="service-box">
                        <h3>Mobile App Development</h3>
                        <p>
                            We build high-quality mobile applications for both iOS and Android platforms.
                            Our team ensures a seamless user experience and robust functionality.
                        </p>
                        <h4>Key Features:</h4>
                        <ul>
                            <li>Cross-Platform Development</li>
                            <li>User-Friendly Interface</li>
                            <li>API Integration</li>
                            <li>Post-Launch Support</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
