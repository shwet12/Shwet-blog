import React from 'react'

import { Link } from 'gatsby'
import ReactTypingEffect from 'react-typing-effect';

const Banner = () => {
    return (
        <div className="card">
            <div className="container">
                <h3 className="bannerTitle">Hi folks!</h3>
                <ReactTypingEffect
                    text={["Hey there! Nice to see.", "I build things for the web."]}
                    eraseDelay={100}
                    eraseSpeed={100}
                    typingDelay={100}
                    speed={100}
                />
                <p className="bannerParagraph">
                </p>

            </div>

        </div>
    )
}

export default Banner;