import React, {useEffect, useState} from 'react';
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
import ProjectSevenPic from "../src/Components/images/ProjectPics/marspic.PNG"
import Background from '../src/Components/images/Backgrounds/Névtelen terv (42).png'
import { FaArrowCircleUp } from 'react-icons/fa';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleModeToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
            <Header isDarkMode={isDarkMode} onModeToggle={handleModeToggle}/>
            {showScrollToTop && (
                <div className="scroll-to-top" onClick={scrollToTop}>
                    <FaArrowCircleUp size={36} />
                </div>
            )}
                <div className="d-flex justify-content-center align-items-center flex-column mt-5" id="projects">
                    <h2 className="title-projects">Projects</h2>
                    <div className="d-flex flex-row justify-content-center project-card-container gap-4 w-75">
                        <div className="project-card d-flex flex-row justify-content-center align-items-center mt-4">
                            <ProjectCard
                                title="Health Center Page"
                                description="The main functionality of this ongoing project is the appointment booking system, which allows users 
                                to schedule appointments with doctors, view their upcoming appointments, and cancel booked appointments if necessary."
                                imageSrc={ProjectOnePic}
                                githubLink="https://github.com/lilifarkas/health-center-page"
                                previewLink="no"
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
                                previewLink="no"
                            />
                        </div>
                        <div className="project-card d-flex flex-row justify-content-center align-items-center mt-4 w-25">
                            <ProjectCard
                                title="Rick And Morty"
                                description=" This web application allows users to explore 
                                and learn about characters and locations from the popular TV show Rick and Morty."
                                imageSrc={ProjectThreePic}
                                githubLink="https://github.com/lilifarkas/rick-and-morty"
                                previewLink="https://rickandmorty-reactpage.netlify.app/"
                            />
                        </div>
                        <div className="project-card d-flex flex-row justify-content-center align-items-center mt-4 w-25">
                            <ProjectCard
                                title="Portfolio Page"
                                description="This portfolio page showcases my projects, technologies/stack, and information about me. 
                                It is a React application built with Bootstrap and React Spring."
                                imageSrc={ProjectFourPic}
                                githubLink="https://github.com/lilifarkas/portfolio-page"
                                previewLink="https://lilifarkas-portfolio.onrender.com/"
                            />
                        </div>
                        <div className="project-card d-flex flex-row justify-content-center align-items-center mt-4 w-25">
                            <ProjectCard
                                title="Employees data"
                                description="A full-stack web application built with the 
                                MERN stack (MongoDB, Express, React, Node.js) 
                                that allows you to manage employees and equipment."
                                imageSrc={ProjectFivePic}
                                githubLink="https://github.com/lilifarkas/employees-data"
                                previewLink="https://employees-data-frontend.onrender.com/"
                            />
                        </div>
                        <div className="project-card d-flex flex-row justify-content-center align-items-center mt-4 w-25">
                            <ProjectCard
                                title="Mars exploration"
                                description="Console application that simulates the movement of a Rover on Mars 
                                as it maps colonization possibilities. To see the app click download and then click on the MapExplorer.exe file"
                                imageSrc={ProjectSevenPic}
                                githubLink="https://github.com/lilifarkas/mars-exploration"
                                previewLink=""
                            />
                        </div>
                    </div>
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