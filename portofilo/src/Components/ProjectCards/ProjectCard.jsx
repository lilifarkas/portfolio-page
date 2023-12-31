import React from 'react';
import './ProjectCard.css';
// import createZip from "./createZip";
import MarsExplorer from "../MarsExplorer/MarsExplorer.rar";
import FadeIn from '../Animation/FadeIn'
import {isDisabled} from "bootstrap/js/src/util";


function ProjectCard({ title, description, imageSrc, githubLink, previewLink}) {

    const handleDownloadClick = () => {
        const link = document.createElement('a');
        link.href = MarsExplorer;
        link.download = 'MarsExplorer.rar';
        link.click();
    };

    const isLink = previewLink && previewLink.startsWith('http');
    const isUnable = previewLink && previewLink.startsWith('no');
    
    return (
        <div className="project-card ">
            <FadeIn>
                <div className="card-content">
                    <img src={imageSrc} alt={title} />
                    <div className="project-info">
                        <h3>{title}</h3>
                        <div>
                            <p className="project-description">{description}</p>
                        </div>
                        <div className="button-container">
                            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="card-buttons">
                                Check on GitHub
                            </a>
                            {isLink || isUnable ? (
                                <a href={isUnable ? "#" : previewLink} 
                                   target="_blank" rel="noopener noreferrer" 
                                   className={`card-buttons ${isUnable ? 'disabled' : ''}`}>
                                    Live preview
                                </a>
                            ) : (
                                <button className={`card-buttons ${isUnable ? 'disabled' : ''}`} disabled={isUnable} onClick={handleDownloadClick}>
                                    Download
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

export default ProjectCard;