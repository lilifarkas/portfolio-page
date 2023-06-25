import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const handleEmailClick = () => {
        window.location.href = 'mailto:lili.farkas14@gmail.com';
    };
    
    return (
        <footer className="footer d-flex flex-row justify-content-center gap-5 align-items-center">
            <p className="rainbow-text contacts">Contacts:</p>
            <p onClick={handleEmailClick} className="email mt-3">lili.farkas14@gmail.com</p>
            
            <a href="https://www.linkedin.com/in/lilifarkas" target="_blank" rel="noopener noreferrer"
            className="social-icons">
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="white"/>
            </a>
            <a href="https://www.facebook.com/lili.farkas.31/" target="_blank" rel="noopener noreferrer"
               className="social-icons">
                <FontAwesomeIcon icon={faFacebook} size="2x" color="white"/>
            </a>
            <a href="https://github.com/lilifarkas" target="_blank" rel="noopener noreferrer" className="social-icons">
                <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
            </a>
        </footer>
    );
}

export default Footer;