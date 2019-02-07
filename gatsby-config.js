module.exports = {
  siteMetadata: {
    title: `Ignacio Aleman`,
    description: `Ignacio Alemans personal website`,
    author: `Ignacio Aleman`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `data/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/css/style.css'], // Purge only tailwind
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
              `gatsby-remark-katex`,
              {
                  resolve: `gatsby-remark-prismjs`,
                  options: {
                      classPrefix: "language-",
                      inlineCodeMarker: null,
                      aliases: {},
                      showLineNumbers: false,
                      noInlineHighlight: false,
                  },
              },
          ],
      },
  },
  ],
}
