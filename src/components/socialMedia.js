import twitter from "../../content/assets/twitter.svg"
import linkedin from "../../content/assets/linkedin.svg"
import github from "../../content/assets/github.svg"

import * as React from "react"

const Social = () => {
    return (
        <div className="social-media-content">
            <ul className="list-inline">
                <li className="list-inline-item">
                    <a href="https://twitter.com/shwet_anand" target="_blank">
                        <img className="media-icon" src={twitter} alt="twitter-url" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/shwet-anand-33503475/" target="_blank">
                        <img className="media-icon" src={linkedin} alt="linked-url" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="https://github.com/shwet12" target="_blank">
                        <img className="media-icon" src={github} alt="github-url" />
                    </a>
                </li>
            </ul>

        </div>

    )
}

export default Social;