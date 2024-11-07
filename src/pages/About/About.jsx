import React from 'react'
import "./About.css";

function About() {
  /**
   * Biography: A short paragraph about yourself, including your background, interests, and what led you to software development.
   * Education: Briefly list relevant degrees or certifications.
   * Experience: Summarize your professional journey, highlighting key roles and responsibilities.
   * Personal Touch: Include hobbies or interests outside of programming that reflect your personality.
   */
  
  return (
    <section id="about">
      <h1>About Me</h1>
      <div className="info-container">
        <div className="left-section">
          <img src="/umar.jpg" />
        </div>
        <div className="right-section">
          <p>Passionate and dedicated professional in programming, software development, and computer science. Experienced in creating innovative solutions with a strong foundation in languages and frameworks. Committed to delivering high-quality software applications, continuously expanding knowledge, and staying updated on industry trends. Possesses problem-solving and analytical skills, approaches challenges logically, and enjoys collaborating in team environments. Committed to lifelong learning and actively seeks opportunities to refine skills.</p>
          <br />
          <p>In my free time, I love to immerse myself in programming and exploring new technologies, constantly seeking to expand my skill set. Gaming is another passion of mine, providing both entertainment and inspiration for my projects.</p>
        </div>
      </div>
    </section>
  )
}

export default About