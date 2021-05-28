import React from 'react'

import { Link } from 'gatsby'
import ReactTypingEffect from 'react-typing-effect';

const Banner = () => {
    return (
        <div className="card">
            <div className="container">
                <h3 className="bannerTitle">Hi folks!</h3>
                <ReactTypingEffect
                    text={["Welcome to my Home.", "I build things for the web."]}
                    eraseDelay={1000}
                    typingDelay={1000}
                />
                <p className="bannerParagraph">
                </p>

            </div>

        </div>
    )
}

export default Banner;