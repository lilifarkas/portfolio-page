import React, {useState} from 'react';
import './Header.css';
import profilePicture from '../images/githubpic-removebg-preview.png';
import { useSpring, animated } from 'react-spring';
import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { Sling as Hamburger } from 'hamburger-react'
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import CV from '../Cv/lili_farkas__FULLSTACK-10M-DAYTIME (2).pdf'

function Header({ isDarkMode, onModeToggle }) {
    const [mode, setMode] = useState('dark');
    const [isHovered, setIsHovered] = useState(false);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    
    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen);
    }

    const buttonAnimation = useSpring({
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        backgroundColor: isHovered ? 'rgb(17, 169, 199)' : 'rgb(142, 91, 210)',
    });

    const handleModeChange = (mode) => {
        setMode(mode);
        onModeToggle(); 
    };

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'lili_farkas_FULLSTACK-10M-DAYTIME';
        link.click();
    };
    
    return (
        <>
        <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="navbar-profile">
                <div className="hamburger">
                    <Hamburger size={20} onToggle={toggleHamburger}/>
                </div>
                <nav className={`navbar-nav d-flex flex-row mt-5 ${hamburgerOpen ? 'show' : 'dontShow'}`}>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#technologies">Technologies</a>
                </nav>
                <div className="mode-toggle mt-5 ">
                    <DarkModeToggle
                        mode={mode}
                        size="sm"
                        onChange={handleModeChange}
                        
                    />
                </div>
                <div className="links mt-5 d-flex flex-row gap-3">
                    <a href="https://www.linkedin.com/in/lilifarkas" target="_blank" rel="noopener noreferrer"
                       className="social-icons">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" color="#56A8C4"/>
                    </a>
                    <a href="https://github.com/lilifarkas" target="_blank" rel="noopener noreferrer" className="social-icons">
                        <FontAwesomeIcon icon={faGithub} size="2x" color="#56A8C4"/>
                    </a>
                </div>
            </div>
            <div className="header-content">
                <div className="header-text d-flex flex-column w-50">
                    <div className="introduction">
                        Hello, I'm <span className="rainbow-text">Lili Farkas</span>,<br /><br />
                        Full-Stack Developer
                    </div>
                    <br /><br />
                    <p className="intro">Along with my studies in health promotion, my extensive experience 
                        in both individual and collaborative work settings has given me a unique perspective that 
                        I bring to software development, to meet the specific requirements of each project. 
                        Experienced in connecting front-end design with backend infrastructure and possess a 
                        strong grasp of OOP concepts and techniques.</p>
                    <animated.button
                        className="cv-button gradient-text"
                        style={buttonAnimation}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={handleDownloadCV}
                    >
                        Download CV
                    </animated.button>
                </div>
                <div className="profile align-self-start">
                    <img className="profile-picture" src={profilePicture} alt="Profile" />
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;