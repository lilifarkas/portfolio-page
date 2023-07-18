import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Footer() {
    const handleEmailClick = () => {
        window.location.href = 'mailto:lili.farkas14@gmail.com';
    };
    
    return (
        <footer className="footer">
            <div className="link-icons">
                <div onClick={handleEmailClick} className="email">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" />
                </div>
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
            </div>
        </footer>
    );
}

export default Footer;