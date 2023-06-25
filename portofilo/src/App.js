import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import ProjectCard from './Components/ProjectCards/ProjectCard';
import Footer from './Components/Footer/Footer';
import Technologies from './Components/Technologies/Technologies';
import ProjectOnePic from "../src/Components/images/ProjectPics/1.PNG"

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleModeToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
            <Header isDarkMode={isDarkMode} onModeToggle={handleModeToggle} />
            <div className="mt-5 mb-5 d-flex" id="projects">
                <section className="d-flex justify-content-center align-items-center flex-column">
                    <h2 className="title-projects">Projects</h2>
                    <div className="d-flex flex-row justify-content-center project-card-container gap-4 w-75">
                        <div className="project-card d-flex flex-row justify-content-center align-items-center mt-4">
                            <ProjectCard
                                title="Health Center Page"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices, nisi ac mollis bibendum."
                                imageSrc={ProjectOnePic}
                                githubLink="https://github.com/lilifarkas/health-center-page"
                            />
                        </div>
                        <div className="project-card d-flex flex-row justify-content-center align-items-center mt-4 w-25">
                            <ProjectCard
                                title="Mental Health Journal Application"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices, nisi ac mollis bibendum."
                                imageSrc="project2.jpg"
                                githubLink="https://github.com/lilifarkas/mental-health-journal"
                            />
                        </div>
                        <div className="project-card d-flex flex-row justify-content-center align-items-center mt-4 w-25">
                            <ProjectCard
                                title="Rick And Morty"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices, nisi ac mollis bibendum."
                                imageSrc="project2.jpg"
                                githubLink="https://github.com/lilifarkas/rick-and-morty"
                            />
                        </div>
                        <div className="project-card d-flex flex-row justify-content-center align-items-center mt-4 w-25">
                            <ProjectCard
                                title="Portfolio Page"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices, nisi ac mollis bibendum."
                                imageSrc="project2.jpg"
                                githubLink="https://github.com/lilifarkas/portfolio-page"
                            />
                        </div>
                        <div className="project-card d-flex flex-row justify-content-center align-items-center mt-4 w-25">
                            <ProjectCard
                                title="Employees data"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices, nisi ac mollis bibendum."
                                imageSrc="project2.jpg"
                                githubLink="https://github.com/lilifarkas/employees-data"
                            />
                        </div>
                        <div className="project-card d-flex flex-row justify-content-center align-items-center mt-4 w-25">
                            <ProjectCard
                                title="Mars exploration"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices, nisi ac mollis bibendum."
                                imageSrc="project2.jpg"
                                githubLink="https://github.com/lilifarkas/mars-exploration"
                            />
                        </div>
                    </div>
                </section>
            </div>
            
            <Technologies />
            <About />
            <Footer />
        </div>
    );
}

export default App;