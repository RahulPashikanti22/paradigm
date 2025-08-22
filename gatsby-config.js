/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `paradigmIT`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    
    // "gatsby-plugin-google-gtag"
   
    {  
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/", 
      },
      __key: "images",
    },
  ],
};
