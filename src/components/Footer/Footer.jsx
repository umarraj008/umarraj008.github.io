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
      <div className='top-container'>
        <h4>Contact Me</h4>
        <p>Email: <a href="mailto:umar.rajput02@gmail.com">umar.rajput02@gmail.com</a></p>
        <div className='socials-container'>
          <a href="https://github.com/umarraj008/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/umar-rajput/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className='bottom-container'>
        <p>© {year} Umar Rajput. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer