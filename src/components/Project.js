import React from 'react';
import './Project.css';
import projects from './projectsData';


function Projects() {
    return (
        <section className="section" id="projects">
            <h2>Projects</h2>
            <div className='project-list'>
                {projects.map((proj,index) => (
                    <div key={index} className="project-card">
                        <h3>{proj.title}</h3>
                        <p>{proj.description}</p>
                            <a href={proj.link} target="_blank" rel="noopener noreferrer">View Project</a></div>
                ))}
            </div>
        </section>
    )
}

export default Projects;