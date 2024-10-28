import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import "./Home.css";
import { Link } from 'react-router-dom';
import TypingAnimation from '../../components/TypingAnimation/TypingAnimation';

function Home() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://umarrajput.co.uk/" />
        <title>Home | Umar Rajput</title>
        <meta name="description" content="" />
      </Helmet>
      <main className='home-container'>
        <div className="left-section">
          <h1 className='title'>Hello, I'm Umar Rajput</h1>
          <TypingAnimation />
          <h2>A full stack developer based in Redditch, UK</h2>
          <Link to="about"><button>About Me</button></Link>
        </div>
        <div className="right-section">
          <img src="/umarLogoV3.png"/>
        </div>
      </main>
    </>
  )
}

export default Home