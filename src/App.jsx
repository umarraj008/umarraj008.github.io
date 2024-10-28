import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import CV from './pages/CV/CV';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
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