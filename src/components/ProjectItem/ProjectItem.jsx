import React from 'react'
import "./ProjectItem.css";
import ImagesSlideShow from '../ImageSlideShow/ImagesSlideShow';

function ProjectItem({project}) {
  return (
    <div className="projects-item">
      <h2>{project.title}</h2>
      <h3>{project.date}</h3>
      <ImagesSlideShow images={project.images} alt="Project Images"/>
      <ul>
        {project.tech.map(tech => (
          <li>{tech}</li>
        ))}
      </ul>
      <p>{project.description}</p>
      <div className="button-container">
        <a href={project.github}>GitHub&nbsp;<span className="material-symbols-outlined">open_in_new</span></a>
        <a href={project.demo}>Live Demo&nbsp;<span className="material-symbols-outlined">open_in_new</span></a>
      </div>
    </div>
  )
}

export default ProjectItem