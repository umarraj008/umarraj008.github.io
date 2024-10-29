import React, { useEffect } from 'react'
import "./Header.css";

function Header(props) {
  const scrollToSection = (e, id) => {
    e?.preventDefault();

    const section = document.getElementById(id);
    
    if (section) {
      const headerHeight = 80;
      const headerPadding = 40;
      const headerOffset = headerHeight + headerPadding;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      location.hash = "#" + id;
      
      scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.replace('#', '');
        scrollToSection(null, sectionId);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  return (
    <header>
      <div className='header-container'>
        <div className='logo-container'>
          <img src='/umarLogoV3.png' />
          <h1>Umar Rajput</h1>
        </div>
        <nav className='button-container'>
            <a className={(props.currentSection == "home") ? "highlight" : ""} href="#home" onClick={(e) => scrollToSection(e,'home')}>Home</a>
            <a className={(props.currentSection == "about") ? "highlight" : ""} href="#about" onClick={(e) => scrollToSection(e,'about')}>About</a>
            <a className={(props.currentSection == "skills") ? "highlight" : ""} href="#skills" onClick={(e) => scrollToSection(e,'skills')}>Skills</a>
            <a className={(props.currentSection == "projects") ? "highlight" : ""} href="#projects" onClick={(e) => scrollToSection(e,'projects')}>Projects</a>
            <a className={(props.currentSection == "cv") ? "highlight" : ""} href="#cv" onClick={(e) => scrollToSection(e,'cv')}>CV</a>
            <a className={(props.currentSection == "contact") ? "highlight" : ""} href="#contact" onClick={(e) => scrollToSection(e,'contact')}>Contact</a>
            <a href="https://umarrajput.co.uk/Old-Website" target='_blank' rel="noopener noreferrer">Games&nbsp;<span class="material-symbols-outlined">open_in_new</span></a>
        </nav>
        <div className="social-container">
          <a alt="GitHub Link" href="https://github.com/umarraj008/" target='_blank' rel="noopener noreferrer" className='git-button'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" /></a>
          <a alt="LinkedIn Link" href="https://www.linkedin.com/in/umar-rajput/" target='_blank' rel="noopener noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" /></a>
        </div>
      </div>
    </header>
  )
}

export default Header