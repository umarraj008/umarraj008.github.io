import React from 'react'
import "./ProjectItem.css";
import ImagesSlideShow from '../ImageSlideShow/ImagesSlideShow';

function ProjectItem({project}) {
  return (
    <div className="projects-item">
      <div className="left-side">
        <h2>{project.title}</h2>
        <h3>{project.subtitle}</h3>
        <ul>
          {project.tech.map(tech => (
            <li>{tech}</li>
          ))}
        </ul>
        <p>{project.description}</p>
        <div className="button-container">
          <a href={project.github} target='_blank' rel="noopener noreferrer">GitHub&nbsp;<span className="material-symbols-outlined">open_in_new</span></a>
          {project.demo && <a href={project.demoLink} target='_blank' rel="noopener noreferrer">Live Demo&nbsp;<span className="material-symbols-outlined">open_in_new</span></a>}
        </div>
      </div>
      <div className="right-side">
        <ImagesSlideShow images={project.images} alt="Project Images"/>
      </div>
    </div>
  )
}

export default ProjectItem