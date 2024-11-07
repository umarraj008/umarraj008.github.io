import React, { useEffect, useState } from 'react'
import "./ThemeChangeButton.css";

function ThemeChangeButton() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        setTheme(savedTheme);
    } else {
        const systemPreferredTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        localStorage.setItem('theme', systemPreferredTheme);
        document.documentElement.setAttribute('data-theme', systemPreferredTheme);
        setTheme(systemPreferredTheme);
      }
    }, []);
  
  const changeTheme = () => {
    setTheme(prev => {
      if (prev == "light") {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute('data-theme', "dark");
        return "dark";
      }
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute('data-theme', "light");
      return "light";
    });
  };

  return (
    <button className={"theme-change-button " + theme} onClick={changeTheme}><span className="material-symbols-outlined">{theme == "light" ? "light_mode" : "dark_mode"}</span></button>
  )
}

export default ThemeChangeButton