import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, imageSrc, githubLink }) {
    return (
        <div className="project-card">
            <div className="card-content">
                <img src={imageSrc} alt={title} />
                <div className="project-info">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;