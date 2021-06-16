module.exports = {
  siteMetadata: {
    title: "Kevin's Portfolio",
  },
  plugins: [
  "gatsby-plugin-gatsby-cloud",
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  {
    resolve: 'gatsby-source-medium',
    options: {
      username: '@teapuddles', // Medium user name
    },
  },
],
  
};
