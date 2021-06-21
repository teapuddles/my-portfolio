module.exports = {
  siteMetadata: {
    title: "Kevin's Portfolio",
  },
  plugins: [
  "gatsby-plugin-gatsby-cloud",
  "gatsby-plugin-image",
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/images`,
    },
  },
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  {
    resolve: 'gatsby-source-medium',
    options: {
      username: '@teapuddles', // Medium user name
    },
  },
],
  
};
