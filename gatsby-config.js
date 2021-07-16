module.exports = {
  siteMetadata: {
    siteUrl: "https://shahrozdomore.github.io/",
    title: "Shahroz Ali Khan - Fullstack developer",
    titleTemplate: "%s - Shahroz Ali Khan",
    author: {
      name: "Shahroz Ali Khan",
      summary: "Fullstack developer",
    },
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-tsconfig-paths",
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
