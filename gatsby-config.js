module.exports = {
  siteMetadata: {
    title: ``,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/index.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: 'pages',
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
  ],
}

// `gatsby-plugin-catch-links`,
// `gatsby-plugin-react-helmet`,
// ,
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
