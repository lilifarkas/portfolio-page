import React, {useState} from 'react';
import './Header.css';
import profilePicture from '../images/githubpic-removebg-preview.png';
import { useSpring, animated } from 'react-spring';
import 'bootstrap/dist/css/bootstrap.css';

function Header({ isDarkMode, onModeToggle }) {

    const [isHovered, setIsHovered] = useState(false);

    const buttonAnimation = useSpring({
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        backgroundColor: isHovered ? 'rgb(17, 169, 199)' : 'rgb(142, 91, 210)',
    });
    
    return (
        <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="navbar-profile">
                <nav className="navbar-nav d-flex flex-row mt-5">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#technologies">Technologies</a>
                </nav>
                <div className="mode-toggle mt-5 ">
                    <button
                        className={`toggle-button ${isDarkMode ? 'dark' : 'light'}`}
                        onClick={onModeToggle}
                    >
                        {isDarkMode ? 'Dark Light' : 'Light Dark'}
                    </button>
                    {/*<DayNightToggle*/}
                    {/*    onChange={onModeToggle}*/}
                    {/*    checked={isDarkMode}*/}
                    {/*    className=""*/}
                    {/*/>*/}
                    {/*<input*/}
                    {/*    type="checkbox"*/}
                    {/*    id="toggle"*/}
                    {/*    checked={isDarkMode}*/}
                    {/*    onChange={onModeToggle}*/}
                    {/*/>*/}
                    {/*<label htmlFor="toggle" className="toggle-label" />*/}
                </div>
            </div>
            <div className="header-content">
                <div className="header-text d-flex flex-column w-50">
                    <div className="introduction">
                        Hello, I'm <span className="rainbow-text">Lili Farkas</span>,<br /><br />
                        Full-Stack Developer
                    </div>
                    <br /><br />
                    <p className="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices, nisi ac mollis bibendum,
                        ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <animated.button
                        className="cv-button gradient-text"
                        style={buttonAnimation}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        Download CV
                    </animated.button>
                </div>
                <div className="profile align-self-start">
                    <img className="profile-picture" src={profilePicture} alt="Profile" />
                </div>
            </div>
        </header>
    );
}

export default Header;