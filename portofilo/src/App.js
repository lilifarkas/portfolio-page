import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import ProjectCard from './Components/ProjectCards/ProjectCard';
import Footer from './Components/Footer/Footer';
import Technologies from './Components/Technologies/Technologies';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleModeToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
            <Header isDarkMode={isDarkMode} onModeToggle={handleModeToggle} />
            <div className="mt-5 d-flex justify-content-center align-items-center">
                <section className="projects d-flex flex-column justify-content-center align-items-center w-75">
                    <h2 className="align-self-start">Projects</h2>
                    <div className="project-cards">
                        <ProjectCard
                            title="Project 1"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices, nisi ac mollis bibendum."
                            imageSrc="project1.jpg"
                            githubLink="https://github.com/example/project1"
                        />
                        <ProjectCard
                            title="Project 2"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices, nisi ac mollis bibendum."
                            imageSrc="project2.jpg"
                            githubLink="https://github.com/example/project2"
                        />
                        <ProjectCard
                            title="Project 3"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices, nisi ac mollis bibendum."
                            imageSrc="project2.jpg"
                            githubLink="https://github.com/example/project2"
                        />
                        <ProjectCard
                            title="Project 4"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices, nisi ac mollis bibendum."
                            imageSrc="project2.jpg"
                            githubLink="https://github.com/example/project2"
                        />
                        {/* Add more project cards here */}
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