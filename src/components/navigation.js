
import React from 'react'

import { Link } from 'gatsby'

const Navigation = () => {
    return (
        <section className="links-section">
            <Link className="pageLink" to="/">Home</Link>|
            {/* <Link className="pageLink" to="/projects"> Projects</Link>| */}
            <Link className="pageLink" to="/blogs"> Blogs</Link>
        </section>
    )
}

export default Navigation;
