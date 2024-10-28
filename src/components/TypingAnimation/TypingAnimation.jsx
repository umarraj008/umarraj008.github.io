import React, { useEffect, useState } from 'react';

const TypingAnimation = () => {
  const [currentText, setCurrentText] = useState('a');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(1);
  const [typing, setTyping] = useState(0);
  const displayTime = 7000;
  const textArray = [
    "a Software Developer", 
    "a Full Stack Developer",
    "a Java Developer", 
    "a React Developer",
    "a PHP Developer",
    "a JavaScript Developer",
    "a Node.js Developer",
    "a C# Developer",
    "a .NET Developer",
    "a .ASP Developer",
    "a Python Developer",
    "a Android Developer",
    "a Web Developer",
    "a Game Developer",
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing == 0) {
        if (currentText.length >= textArray[currentIndex].length) {
          setTyping(1)
          setTimeout(() => {
            setTyping(2);
          }, displayTime);
          return;
        }
        
        setCurrentText(prev => prev + textArray[currentIndex][textIndex]);
        setTextIndex(prev => (prev + 1) >= textArray[currentIndex].length ? 0 : prev + 1);
        
      } else if (typing == 2) {
        if (currentText.length <= 1) {
          setTextIndex(1);
          setCurrentIndex(prev => prev + 1 >= textArray.length ? 0 : prev + 1);
          setTyping(0);
          return;
        }

        setCurrentText(prev => prev.slice(0, -1));
        setTextIndex(prev => (prev - 1) <= 0 ? 0 : prev - 1);
      }        
    }, getRandomArbitrary(10, 100));

    return () => clearTimeout(timeout);
  }, [textIndex, typing, currentIndex, currentText]);
  
  // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  return (
    <div className="typing" id="typing-animation">{currentText}</div>
  );
};

export default TypingAnimation;
