import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css";

function Header() {
  return (
    <header>
      <div className='logo-container'>
        <img src='/umarLogoV3.png' />
        <h1>Umar Rajput</h1>
      </div>
      <nav className='button-container'>
          <Link to="/"><button>Home</button></Link>
          <Link to="about"><button>About</button></Link>
          <Link to="projects"><button>Projects</button></Link>
          <Link to="skills"><button>Skills</button></Link>
          <Link to="cv"><button>CV</button></Link>
          <Link to="contact"><button>Contact</button></Link>
      </nav>
      <div className="social-container">
        <a alt="GitHub Link" href="https://github.com/umarraj008/" target='_blank' className='git-button'><img src='/github.svg' /></a>
        <a alt="LinkedIn Link" href="https://www.linkedin.com/in/umar-rajput/" target='_blank'><img src='/linkedin.svg' /></a>
      </div>
    </header>
  )
}

export default Header