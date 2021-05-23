import React from 'react'
import Layout from "../components/layout"
import Banner from '../components/Banner'
import Navigation from '../components/navigation'
import Bio from "../components/bio";
import SEO from "../components/seo";
import Timeline from "../components/timeline"

const About = (data, location) => {
  const siteTitle = "Shwet's Portfolio"
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Bio />
      <Navigation />
      <Banner />
      <h4 className="card-about-heading">Hi, I'm Shwet </h4>
      <p className="card-about-description">I'm a frontend engineer who specializes in building digital experiences.
      Currently, I'm an engineer at Deloitte focused on building accessible, human-centered products.</p>
      <br />
      <p>
        Love to Architect web for the consumers with the skills and passion for building awesome Web Apps using Javascript.

      </p>
      <p>
        Here are a few technologies I've been working with recently:
      </p>
      <ul className="skills-list">
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>HTML,CSS</li>
        <li>Angular</li>
        <li>Node.js</li>
        <li>Typescript</li>
        <li>Redux</li>
        <li>Gatsby.js</li>
      </ul>
      <Timeline />
    </Layout>
  )
}

export default About;