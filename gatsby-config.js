module.exports = {
  siteMetadata: {
    title: `RENCI Switchboard`,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus animi harum accusantium!`,
    author: `mw`,
    menuItems: [
      { text: 'Welcome', path: '/', submenu: null},
      { text: 'Communications', path: '/comms', },
      { text: 'Project Management', path: '/pm', },
      { text: 'Event Planning', path: '/pm/event-planning', },
      { }, // this indicates a divider should be rendered in the menu
      { text: 'Documents', path: '/docs', },
      { text: 'FAQs', path: '/faqs', },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto', 'Droid Serif']
        }
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "/switchboard",
}
