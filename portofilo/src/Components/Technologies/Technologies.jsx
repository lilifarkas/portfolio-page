import React from 'react';
import './Technologies.css';

function Technologies() {
    return (
        <section className="technologies">
            <h2>Technologies</h2>
            <div className="technologies-list">
                <div className="technology">
                    <div className="technology-icon html"></div>
                    <p>HTML5</p>
                </div>
                <div className="technology">
                    <div className="technology-icon css"></div>
                    <p>CSS3</p>
                </div>
                <div className="technology">
                    <div className="technology-icon js"></div>
                    <p>JavaScript</p>
                </div>
                {/* Add more technologies */}
            </div>
        </section>
    );
}

export default Technologies;