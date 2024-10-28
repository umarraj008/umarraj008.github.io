import React from 'react'
import "./Footer.css";

function Footer() {
  //email
  //links to socials
  //nav links
  //copyright © 2024 Your Name. All rights reserved.
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>
        <h4>Contact Me</h4>
        <p>Email: <a href="mailto:umar.rajput02@gmail.com">umar.rajput02@gmail.com</a></p>
        <div>
          <a href="https://github.com/umarraj008/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/umar-rajput/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div>
        <p>© {year} Umar Rajput. All rights reserved.</p>
        <p>This project is licensed under the GPL-3.0 License. <a href="https://github.com/umarraj008/umarraj008.github.io?tab=GPL-3.0-1-ov-file" target="_blank" rel="noopener noreferrer">Read the full license</a>.</p>
      </div>
    </footer>
  )
}

export default Footer