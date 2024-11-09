import React, { useEffect, useState } from 'react'
import "./Home.css";
import TypingAnimation from '../../components/TypingAnimation/TypingAnimation';

function Home() {
  return (
    <section id="home">
      <div className="left-section">
        <h1 className='title'>Hello, I'm Umar Rajput,</h1>
        <TypingAnimation />
        <h2>Focusing on full-stack development and data-driven solutions</h2>
        <a href="#about"><span className="material-symbols-outlined">arrow_downward</span>&nbsp;Learn More</a>
      </div>
      <div className="right-section">
        <img src="/umar.webp" alt="Umar Rajput | Full-Stack Developer Portfolio"/>
      </div>
    </section>
  )
}

export default Home