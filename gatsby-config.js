module.exports = {
  siteMetadata: {
    siteTitle: `React tips`,
    defaultTitle: `React tips`,
    siteTitleShort: `React tips`,
    siteDescription: `React tips`,
    siteUrl: `https://react-tips.netlify.app/`,
    siteAuthor: `React tips`,
    siteImage: `/cover.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
    basePath: `/`,
    footer: `React Tips`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/alewin/react-tips`,
        baseDir: `src/docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `React Tips`,
        short_name: `React Tips`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/logo.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://react-tips.netlify.app`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
