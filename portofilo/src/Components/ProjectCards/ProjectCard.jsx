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
                    <div className="d-flex flex-row justify-content-center align-items-center gap-4">
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            Check on GitHub
                        </a>
                        <a href={previewLink} target="_blank" rel="noopener noreferrer">
                            Live preview
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;