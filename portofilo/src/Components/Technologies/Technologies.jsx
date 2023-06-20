import React from 'react';
import './Technologies.css';
import C from '../images/Icons/c-sharp.png'
import Js from '../images/Icons/js.png'
import ReactIcon from '../images/Icons/physics.png'
import Aspnet from '../images/Icons/web.png'
import Html from '../images/Icons/html.png'
import Css from'../images/Icons/css-3.png'
import Docker from '../images/Icons/docker.png'
import Nodejs from '../images/Icons/icons8-nodejs-96.png'
import MicrosoftSql from '../images/Icons/sql-server.png'
import BootstrapIcon from '../images/Icons/bootstrap.png'
import GitIcon from '../images/Icons/git.png'
import Postgresql from '../images/Icons/icons8-postgresql-100.png'
import MongoIcon from '../images/Icons/Mongo.png'

function Technologies() {
    return (
        <section className="technologies">
            <div className="container">
                <h2 className="section-title">Technologies</h2>
                <div className="technologies-list">
                    <div className="technology">
                        <div className="technology-icon">
                            {/*<FontAwesomeIcon icon={faCogs} />*/}
                            <img src={C} alt="c# icon" className="icons"/>
                        </div>
                        <p className="tech">C#</p>
                    </div>
                    <div className="technology">
                        <div className="technology-icon">
                            <img src={Js} alt="js icon" className="icons"/>
                        </div>
                        <p className="tech">JavaScript</p>
                    </div>
                    <div className="technology">
                        <div className="technology-icon">
                            <img src={ReactIcon} alt="react icon" className="icons"/>
                        </div>
                        <p className="tech">React</p>
                    </div>
                    <div className="technology">
                        <div className="technology-icon">
                            <img src={Aspnet} alt="c# icon" className="icons"/>
                        </div>
                        <p className="tech">ASP.NET</p>
                    </div>
                    <div className="technology">
                        <div className="technology-icon">
                            <img src={Nodejs} alt="nodejs icon" className="icons"/>
                        </div>
                        <p className="tech">Node.js</p>
                    </div>
                    
                    <div className="technology">
                        <div className="technology-icon">
                            <img src={Postgresql} alt="postgresql icon" className="icons"/>
                        </div>
                        <p className="tech">PostgreSQL</p>
                    </div>
                    <div className="technology">
                        <div className="technology-icon">
                            <img src={Docker} alt="docker icon" className="icons"/>
                        </div>
                        <p className="tech">Docker</p>
                    </div>
                    
                    
                    <div className="technology">
                        <div className="technology-icon">
                            <img src={MicrosoftSql} alt="microsoft sql server icon" className="icons"/>
                        </div>
                        <p className="tech">Microsoft SQL Server</p>
                    </div>
                    <div className="technology">
                        <div className="technology-icon">
                            <img src={MongoIcon} alt="mongodb icon" className="icons"/>
                        </div>
                        <p className="tech">MongoDB</p>
                    </div>
                    <div className="technology">
                        <div className="technology-icon">
                            <img src={BootstrapIcon} alt="bootstrap icon" className="icons"/>
                        </div>
                        <p className="tech">Bootstrap</p>
                    </div>
                    <div className="technology">
                        <div className="technology-icon">
                            <img src={Html} alt="html icon" className="icons"/>
                        </div>
                        <p className="tech">HTML5</p>
                    </div>
                    <div className="technology">
                        <div className="technology-icon">
                            <img src={Css} alt="css icon" className="icons"/>
                        </div>
                        <p className="tech">CSS3</p>
                    </div>
                    <div className="technology">
                        <div className="technology-icon">
                            <img src={GitIcon} alt="bootstrap icon" className="icons"/>
                        </div>
                        <p className="tech">Git</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Technologies;