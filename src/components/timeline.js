/**
 * Timeline component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Timeline = () => {
    const [tab, setTab] = useState('Deloitte');
    const data = useStaticQuery(graphql`
    query TimelineQuery {
        site {
          siteMetadata {
            Organisations {
              name
              projects
              role
              duration
            }
          }
        }
      }
   `)

    const organisations = data.site.siteMetadata.Organisations.map((value) => value.name);
    const { projects, role, duration } = data.site.siteMetadata.Organisations.filter((value, index) => value.name === tab)[0]

    return (
        <>
            <h3>Here are the organisation where I have worked</h3>
            <div className="timeLine__container">

                <div className="timeline__content__tabs">
                    {organisations.map((value, index) => {
                        return (
                            <button key={index} className="timeline__tabs" value={value} onClick={(e) => setTab(value)}>{value}</button>
                        )
                    })}
                </div>
                <div className="timeline__content">
                    <h4 className="timeline__content__title">{role} ({duration})</h4>
                    <ul>
                        {projects.map((value, index) => <li key={index} className="project__details">{value}</li>)}
                    </ul>

                </div>
            </div>


        </>
    )
}

export default Timeline

