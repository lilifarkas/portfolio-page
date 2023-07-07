import React from 'react';
import './ProjectCard.css';


function ProjectCard({ title, description, imageSrc, githubLink, previewLink}) {
    return (
        <div className="project-card ">
            <div className="card-content">
                <img src={imageSrc} alt={title} />
                <div className="project-info">
                    <h3>{title}</h3>
                    <p className="project-description">{description}</p>
                    <div className="button-container">
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="card-buttons">
                            Check on GitHub
                        </a>
                        <a href={previewLink} target="_blank" rel="noopener noreferrer" className="card-buttons">
                            Live preview
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;