import React from 'react';
import { Provider, LikeButton as LyketLikeButton } from '@lyket/react';

const LikeButton = () => {

    return (
        <div>
            <Provider apiKey="pt_b1957a3cb800b6aba3bc21e20e06eb"
                      theme={{
                          colors: {
                              background: "#61dbe3",
                              text: "#61dbe3",
                              primary: "#56A8C4",
                              icon: "rgb(74,100,111)"
                          }
                      }}>
                <LyketLikeButton
                    id="unique-portfolio-id"
                    namespace="portfolio"
                />
            </Provider>
        </div>
    );
};

export default LikeButton;