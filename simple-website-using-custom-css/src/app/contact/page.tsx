import React from 'react'
import "../Styles/Contact.css";


export default function Contact() {
  return (
    <div>
      <section className="contact-form">
        <h1>Contact Us</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"  required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>If you have any questions, feel free to reach out to us:</p>
        <ul>
          <li><strong>Email:</strong> support@example.com</li>
          <li><strong>Phone:</strong> +1 (234) 567-8901</li>
          <li><strong>Address:</strong> 1234 Main St, Anytown, USA</li>
        </ul>
      </section>


    </div>
  )
}
