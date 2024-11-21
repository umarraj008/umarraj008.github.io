import React from 'react'
import "./Projects.css";
import ProjectItem from '../../components/ProjectItem/ProjectItem';

function Projects() {
  const projects = [
    {
      title: "React Calendar App",
      subtitle: "React Web App",
      date: "Oct 2024",
      description: "Developed a React-based web app that allows users to add and manage events, providing search functionality by event title or date for easy navigation and organization. Implemented responsive UI design with both light and dark mode options, ensuring a seamless user experience across various devices and screen sizes. Integrated state management in React to handle dynamic event data, allowing users to view and modify events in real-time with an intuitive interface. Deployed the app online on my personal website (click live demo link below), showcasing both my development skills and hosting experience.",
      github: "https://github.com/umarraj008/Calendar-App",
      demo: true,
      demoLink: "https://umarrajput.co.uk/Calendar-App",
      tech: ["React", "JavaScript", "CSS", "GitHub"],
      images: [
        "https://raw.githubusercontent.com/umarraj008/Calendar-App/refs/heads/main/Project%20Screenshots/App.png",
        "https://raw.githubusercontent.com/umarraj008/Calendar-App/refs/heads/main/Project%20Screenshots/addEvent.gif",
        "https://raw.githubusercontent.com/umarraj008/Calendar-App/refs/heads/main/Project%20Screenshots/editEvent.gif",
        "https://raw.githubusercontent.com/umarraj008/Calendar-App/refs/heads/main/Project%20Screenshots/deleteEvent.gif",
        "https://raw.githubusercontent.com/umarraj008/Calendar-App/refs/heads/main/Project%20Screenshots/important.png",
        "https://raw.githubusercontent.com/umarraj008/Calendar-App/refs/heads/main/Project%20Screenshots/textSearchEvent.gif",
        "https://raw.githubusercontent.com/umarraj008/Calendar-App/refs/heads/main/Project%20Screenshots/dateSearch.gif",
        "https://raw.githubusercontent.com/umarraj008/Calendar-App/refs/heads/main/Project%20Screenshots/theme.png",
      ],
    },
    {
      title: "React Todo List App",
      subtitle: "React Web App",
      date: "Aug 2024",
      description: "This is a simple React app that allows users to track their Todo's. They can add new Todo's, edit, and remove them.",
      github: "https://github.com/umarraj008/Todo-List-App",
      demo: true,
      demoLink: "https://umarrajput.co.uk/Todo-List-App",
      tech: ["React", "JavaScript", "CSS", "GitHub"],
      images: [
        "https://raw.githubusercontent.com/umarraj008/Todo-List-App/main/todo-list-app/public/screenshot.png",
        "https://raw.githubusercontent.com/umarraj008/Todo-List-App/main/todo-list-app/public/screenshot2.png",
      ],
    },
    {
      title: "Photo Gallery Display App",
      subtitle: "Web App",
      date: "Nov 2023",
      description: "I have an old iPad mini and found that it was too old to use anymore. The operating system would'nt update anymore therefore rendering it useless at downloading new apps. Therefore I wanted to repurpose it by making a photo gallery app. This is why I created a Node.js application that allows my iPad to display the images stored within the application. Furthermore, the app accompanies a client controller which allows my family and others to control and add images to the application. Overall this project is fun and interesting and gives my iPad a whole new purpose in its life.",
      github: "https://github.com/umarraj008/Photo-Gallery-Display-App",
      demo: false,
      demoLink: "https://github.com/umarraj008/Photo-Gallery-Display-App",
      tech: ["JavaScript", "Node.js", "Express", "Socket.io", "GitHub"],
      images: [
        "https://raw.githubusercontent.com/umarraj008/Photo-Gallery-Display-App/refs/heads/main/ProjectImages/diagram.png",
      ],
    },
    {
      title: "Cool Surveys",
      subtitle: "Web App",
      date: "Apr 2023",
      description: "As my final year project, this website is a live survey/focus group tool. This tool allows users to create surveys, and distribute them and gain live data and results on their surveys. In addition, users will be able to gain access to surveys and participate effectively through the web app. I aimed to create an easy and simple to use web application that allows anyone to create or participate in surveys, and easily conduct research.",
      github: "https://github.com/umarraj008/Survey-Tool",
      demo: false,
      demoLink: "https://github.com/umarraj008/Survey-Tool",
      tech: ["JavaScript", "PHP", "MySQL", "Charts.js", "GitHub", "Agile", "Kanban"],
      images: [
        "https://github.com/umarraj008/Survey-Tool/blob/main/CoolSurveys.png?raw=true",
      ],
    },
    {
      title: "Park It Android App",
      subtitle: "Android App",
      date: "Feb 2023",
      description: "This is a car parking app created in mobile design and development module for university. The app was created using Android Studio, and was developed using Java. The app is simple and easy to use, with user experience in mind.",
      github: "https://github.com/umarraj008/Car-Parking-App",
      demo: false,
      demoLink: "https://github.com/umarraj008/Car-Parking-App",
      tech: ["Java", "Android Studio", "Google Maps API", "GSON", "RetroFit"],
      images: [
        "https://raw.githubusercontent.com/umarraj008/Car-Parking-App/refs/heads/master/app/src/main/app_logo_icon-playstore.png",
        "https://raw.githubusercontent.com/umarraj008/Car-Parking-App/refs/heads/master/Screenshots/Screenshot_20221225_163318.png",
        "https://raw.githubusercontent.com/umarraj008/Car-Parking-App/refs/heads/master/Screenshots/Screenshot_20221225_163841.png",
        "https://raw.githubusercontent.com/umarraj008/Car-Parking-App/refs/heads/master/Screenshots/Screenshot_20221225_164722.png",
        "https://raw.githubusercontent.com/umarraj008/Car-Parking-App/refs/heads/master/Screenshots/Screenshot_20221225_164848.png",
        "https://raw.githubusercontent.com/umarraj008/Car-Parking-App/refs/heads/master/Screenshots/Screenshot_20221225_164949.png",
        "https://raw.githubusercontent.com/umarraj008/Car-Parking-App/refs/heads/master/Screenshots/Screenshot_20221225_165024.png",
        "https://raw.githubusercontent.com/umarraj008/Car-Parking-App/refs/heads/master/Screenshots/Screenshot_20221225_165102.png",
        "https://raw.githubusercontent.com/umarraj008/Car-Parking-App/refs/heads/master/Screenshots/Screenshot_20221225_165147.png",
        "https://raw.githubusercontent.com/umarraj008/Car-Parking-App/refs/heads/master/Screenshots/Screenshot_20221225_165201.png",
      ],
    },
    {
      title: "Elemental 4",
      subtitle: "JavaScript Web Game",
      date: "Sep 2019",
      description: "During my second year in university, I was project manager and lead developer in our team project module. We had a small team of 10 individuals, where we developed a web base game. This game was an online action-fantasy turn based game.",
      github: "https://github.com/umarraj008/Elemental4Game",
      demo: false,
      demoLink: "https://github.com/umarraj008/Elemental4Game",
      tech: ["JavaScript", "Node.js", "Express", "Socket.io", "MySQL"],
      images: [
        "https://raw.githubusercontent.com/umarraj008/Elemental4Game/Minification/Source/resources/images/githubLogopng.png",
      ],
    },
    {
      title: "Umar Rajput Games",
      subtitle: "Collection of JavaScript Web Games",
      date: "Apr 2018",
      description: "During college I created a games website that hosts multiple web games. These games were made using the HTML Canvas and javascript. They were simple games but were fun and easy to play. One of my best games was Tetris, where it featured a leaderboard that records players high scores. This made the game more competative and overall made more people play this game. My website was popular during college and had many active players daily playing the games.",
      github: "https://github.com/umarraj008/Old-Website",
      demo: true,
      demoLink: "https://umarrajput.co.uk/Umar-Rajput-Games",
      tech: ["HTML", "CSS", "JavaScript", "Firebase", "GitHub Pages"],
      images: [
        "https://raw.githubusercontent.com/umarraj008/Old-Website/refs/heads/master/logo/favicon.png",
        "https://raw.githubusercontent.com/umarraj008/Old-Website/refs/heads/master/MenuImages/tetris.png",
        "https://raw.githubusercontent.com/umarraj008/Old-Website/refs/heads/master/MenuImages/snake.png",
        "https://raw.githubusercontent.com/umarraj008/Old-Website/refs/heads/master/MenuImages/xando.png",
        "https://raw.githubusercontent.com/umarraj008/Old-Website/refs/heads/master/MenuImages/clicker.png",
        "https://raw.githubusercontent.com/umarraj008/Old-Website/refs/heads/master/MenuImages/isoEngine.png",
        "https://raw.githubusercontent.com/umarraj008/Old-Website/refs/heads/master/MenuImages/pong.png",
        "https://raw.githubusercontent.com/umarraj008/Old-Website/refs/heads/master/MenuImages/shooter.png",
        "https://raw.githubusercontent.com/umarraj008/Old-Website/refs/heads/master/MenuImages/sonic.png",
        "https://raw.githubusercontent.com/umarraj008/Old-Website/refs/heads/master/MenuImages/stacker.png",
      ],
    },
  ];

  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map(project => (<ProjectItem project={project} />))}
      </div>
    </section>
  )
}

export default Projects



