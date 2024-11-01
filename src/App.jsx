import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import CV from './pages/CV/CV';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ThemeChangeButton from './components/ThemeChangeButton/ThemeChangeButton';

function App() {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          window.history.replaceState(null, '', `#${id}`);
          setCurrentSection(id);
        }
      });
    }, { threshold: 0.6 });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <ThemeChangeButton />
      <Header currentSection={currentSection} />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <CV />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App