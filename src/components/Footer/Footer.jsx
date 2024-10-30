import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p>{"© " + new Date().getFullYear() + " Umar Rajput. All rights reserved."}</p>
    </footer>
  )
}

export default Footer