import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import ProjectCard from './Components/ProjectCards/ProjectCard';
import Footer from './Components/Footer/Footer';
import Technologies from './Components/Technologies/Technologies';
import Contact from '../src/Components/ContactMe/Contact'
import ProjectOnePic from "../src/Components/images/ProjectPics/1.PNG"
import ProjectTwoPic from "../src/Components/images/ProjectPics/2.PNG"
import ProjectThreePic from "../src/Components/images/ProjectPics/8.PNG"
import ProjectFourPic from "../src/Components/images/ProjectPics/5.PNG"
import ProjectFivePic from "../src/Components/images/ProjectPics/6.PNG"
import Background from '../src/Components/images/Backgrounds/Névtelen terv (42).png'


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
                                description="The main functionality of this project is the appointment booking system, which allows users 
                                to schedule appointments with doctors, view their upcoming appointments, and cancel booked appointments if necessary."
                                imageSrc={ProjectOnePic}
                                githubLink="https://github.com/lilifarkas/health-center-page"
                            />
                        </div>
                        <div className="project-card d-flex flex-row justify-content-center align-items-center mt-4 w-25">
                            <ProjectCard
                                title="Mental Health Journal Application"
                                description="This project is a web application designed to help users track their moods, 
                                complete tasks, manage their profiles, and nurture virtual trees as a way to promote 
                                mental well-being."
                                imageSrc={ProjectTwoPic}
                                githubLink="https://github.com/lilifarkas/mental-health-journal"
                            />
                        </div>
                        <div className="project-card d-flex flex-row justify-content-center align-items-center mt-4 w-25">
                            <ProjectCard
                                title="Rick And Morty"
                                description=" This web application allows users to explore 
                                and learn about characters and locations from the popular TV show Rick and Morty."
                                imageSrc={ProjectThreePic}
                                githubLink="https://github.com/lilifarkas/rick-and-morty"
                                previewLink="https://rickandmorty-page.netlify.app/"
                            />
                        </div>
                        <div className="project-card d-flex flex-row justify-content-center align-items-center mt-4 w-25">
                            <ProjectCard
                                title="Portfolio Page"
                                description="This portfolio page showcases my projects, technologies/stack, and information about me. 
                                It is a React application built with Bootstrap and React Spring."
                                imageSrc={ProjectFourPic}
                                githubLink="https://github.com/lilifarkas/portfolio-page"
                                previewLink="https://lilifarkas-portfolio.netlify.app"
                            />
                        </div>
                        <div className="project-card d-flex flex-row justify-content-center align-items-center mt-4 w-25">
                            <ProjectCard
                                title="Employees data"
                                description="This project manage employees data. Can create new employees and new equipments. Can Edit, delete and arrange data."
                                imageSrc={ProjectFivePic}
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
            <Contact 
                image={Background}
            />
            <Footer />
        </div>
    );
}

export default App;