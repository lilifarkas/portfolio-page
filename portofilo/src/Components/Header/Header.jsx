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
import MovingComponent from 'react-moving-text';
import LikeButton from '../LikeButton/LikeButton'

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
        <header className={`header ${isDarkMode ? 'dark-mode' : ''} `}>
            <div className="navbar-profile">
                <nav>
                    <ul>
                        <input type="checkbox" id="checkbox_toggle" className="hamburger-checkbox"/>
                        <label htmlFor="checkbox_toggle" className="hamburger"><Hamburger size={30} color="#61dbe3" onToggle={toggleHamburger}/></label>
                        <div className="landing-page-menu">
                            <li><a href="#about" className="navigation-navbar-items">About</a></li>
                            <li><a href="#projects" className="navigation-navbar-items">Projects</a></li>
                            <li><a href="#technologies" className="navigation-navbar-items">Technologies</a></li>
                            <li><a href="#contact" className="navigation-navbar-items">Contact</a></li>
                        </div>
                    </ul>
                </nav>
                <div className="mode-toggle  ">
                    <DarkModeToggle
                        mode={mode}
                        size="sm"
                        onChange={handleModeChange}
                        
                    />
                </div>
                <div className="like-button">
                    <LikeButton
                    title="LIKE"/>
                </div>
            </div>
            <div className="header-content">
                <div className="header-text">
                    <div className="main-introduction">
                        <div className="introduction">
                            <div className="first-line">
                                <div className="hello">
                                    Hello, I'm
                                </div>
                                <div className="name">
                                    <MovingComponent
                                        type="shadow"
                                        duration="1800ms"
                                        delay="0s"
                                        direction="normal"
                                        timing="ease"
                                        iteration="1"
                                        fillMode="none"
                                        className="rainbow-text"
                                    >
                                        <span style={{ color: "#61dbe3" }}>L</span>
                                        <span style={{ color: "#E16541" }}>i</span>
                                        <span style={{ color: "#F18F43" }}>l</span>
                                        <span style={{ color: "#8B9862" }}>i</span>
                                        <span> </span>
                                        <span style={{ color: "#476098" }}>F</span>
                                        <span style={{ color: "#61dbe3" }}>a</span>
                                        <span style={{ color: "#A7489B" }}>r</span>
                                        <span style={{ color: "#CA4246" }}>k</span>
                                        <span style={{ color: "#E16541" }}>a</span>
                                        <span style={{ color: "#8B9862" }}>s</span>
                                    </MovingComponent>
                                </div>
                            </div>
                            <br />
                            <div className="role">
                                Full-Stack Developer
                            </div>
                        </div>
                        <br />
                        <p className="intro">Along with my studies in health promotion, my extensive experience
                            in both individual and collaborative work settings has given me a unique perspective that
                            I bring to software development, to meet the specific requirements of each project.
                            Experienced in connecting front-end design with backend infrastructure and possess a
                            strong grasp of OOP concepts and techniques.</p>
                    </div>
                    <div className="profile">
                        <img className="profile-picture" src={profilePicture} alt="Profile" />
                    </div>
                </div>
                <div className="introduction-links">
                    <animated.button
                        className="cv-button gradient-text align-self-end"
                        style={buttonAnimation}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={handleDownloadCV}
                    >
                        Download CV
                    </animated.button>
                    <div className="links mt-5 d-flex flex-row align-items-center gap-3">
                        <a href="https://www.linkedin.com/in/lilifarkas" target="_blank" rel="noopener noreferrer"
                           className="social-icons align-self-start">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" color="#56A8C4"/>
                        </a>
                        <a href="https://github.com/lilifarkas" target="_blank" rel="noopener noreferrer" className="social-icons">
                            <FontAwesomeIcon icon={faGithub} size="2x" color="#56A8C4"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;