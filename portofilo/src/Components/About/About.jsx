import React from 'react';
import './About.css';
import FadeIn from '../Animation/FadeIn'

function About() {
    return (
        <section className="experience" id="about">
            <h2 className="section-title">About me</h2>
            <FadeIn>
                <div className="experience-item">
                    <div className="experience-year">
                        <span className="year">2022- 2023</span>
                        <div>
                            <div className="dot"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="experience-content">
                        <h3>CODECOOL</h3>
                        <p className="about-p">Full Stack Developer Student</p>
                    </div>
                </div>
            </FadeIn>
            <FadeIn>
                <div className="experience-item">
                    <div className="experience-year">
                        <span className="year">2019- 2022</span>
                        <div>
                            <div className="dot"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="experience-content">
                        <h3>M-DENS Kft.</h3>
                        <p className="about-p">Medical Assistant</p>
                    </div>
                </div>
            </FadeIn>
            <FadeIn>
                <div className="experience-item">
                    <div className="experience-year">
                        <span className="year">2019- 2021</span>
                        <div>
                            <div className="dot"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="experience-content">
                        <h3>Országos Kórházi Főigazgatóság</h3>
                        <p className="about-p">Reflexologist and Ear acupuncture addictologist - Certificate</p>
                    </div>
                </div>
            </FadeIn>
            <FadeIn>
                <div className="experience-item">
                    <div className="experience-year">
                        <span className="year">2018</span>
                        <div>
                            <div className="dot"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="experience-content">
                        <h3>University of Szeged</h3>
                        <p className="about-p">Recreation and Health Promotion Manager - Bachelor's Degree</p>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}

export default About;