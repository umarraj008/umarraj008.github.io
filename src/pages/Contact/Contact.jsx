import React from 'react'
import "./Contact.css";

function Contact() {
  /**
   * Contact Form: Include a simple form for visitors to get in touch (Name, Email, Message).
   * Email Address: Provide your email for direct contact.
   * Social Links: Links to your LinkedIn, GitHub, Twitter, or any other relevant profiles.
   */

  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <div className="info-container">
        <div className="info-section">
          <h2>Email</h2>
          <h3><a alt="Email" href="mailto:umar.rajput02@gmail.com" rel="noopener noreferrer">umar.rajput02@gmail.com</a></h3>
        </div>
        <div className="info-section">
          <h2>GitHub</h2>
          <h3><a alt="GitHub Link" href="https://github.com/umarraj008/" target='_blank' rel="noopener noreferrer">github.com/umarraj008</a></h3>
        </div>
        <div className="info-section">
          <h2>LinkedIn</h2>
          <h3><a alt="LinkedIn Link" href="https://www.linkedin.com/in/umar-rajput/" target='_blank' rel="noopener noreferrer">linkedin.com/in/umar-rajput</a></h3>
        </div>
      </div>
    </section>
  )
}

export default Contact