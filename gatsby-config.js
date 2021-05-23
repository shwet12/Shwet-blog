module.exports = {
  siteMetadata: {
    title: `Shwet Anand`,
    author: {
      name: `Shwet anand`,
      summary: `Software Developer | Football Lover | Foodie | Learner`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `shwet_anand`,
    },
    Organisations: [
      {
        name: `Deloitte`,
        role: `Technical Consultant @Deloitte`,
        duration: `Oct 2020 - Present`,
        projects: [
          `Write modern, performant, maintainable code for a diverse array of client and internal projects`,
          `Working on CMS for a Large insurance company. Building UI components for AEM to make the website using Javascript, HTML,CSS, Handlebars js,Web components`,
          `Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis`
        ]
      },
      {
        name: `Nous Infosystems`,
        role: `Software Engineer @Nous`,
        duration: `Jan 2020 - Oct 2020`,
        projects: [
          `Developed an application for one of the biggest credit ratings company. Did UI design and implementation.The tech stack included React js, Redux, Redux-saga, Scss, Primereact`,
          `Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis`
        ]
      },
      {
        name: `Tcs`,
        role: `System Engineer @TCS`,
        duration: `Sept 2016 - Jan 2020`,
        projects: [
          `Write modern, performant, maintainable code for a diverse array of client and internal projects`,
          `Developed an application for TCS internal usage that manages the events which are held in TCS for marketing and sales purpose.The tech stack included Angular JS, HTML, CSS, Java`,
          `Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis`
        ]
      }
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
