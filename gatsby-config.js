module.exports = {
  siteMetadata: {
    title: ``,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-catch-links`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/index.js`,
      },
    },
  ],
}

// `gatsby-plugin-react-helmet`,
// `gatsby-plugin-sharp`,
// {
// 	resolve: `gatsby-plugin-manifest`,
// 	options: {
// 		name: `gatsby-starter-default`,
// 		short_name: `starter`,
// 		start_url: `/`,
// 		background_color: `#663399`,
// 		theme_color: `#663399`,
// 		display: `minimal-ui`,
// 		icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
// 	},
// },
// `gatsby-plugin-offline`,
