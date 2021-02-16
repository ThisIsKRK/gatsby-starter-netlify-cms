/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `GoFloaters`,

    author: {
      name: `GoFloaters`,
      summary: `GoFloaters is a platform that helps you find workspaces that can be booked instantly.`,
    },
    description: `GoFloaters is a platform that helps you find workspaces that can be booked instantly.`,
    siteUrl: `https://gofloaters.com/`,
    social: {
      twitter: `gofloaters`,
    },
  },
  plugins: [
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/event`,
        name: `event`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/assets`,
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
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 900,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-image-attributes`,
            options: {
              styleAttributes: [
                `display`,
                `position`,
                `border`,
                "width",
                "height",
                "margin-left",
                "margin-right",
                "margin-top",
                "margin-bottom",
                "float",
              ],
              dataAttributes: true,
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              ordered: false,
              fromHeading: 1,
              toHeading: 6,
              className: "table-of-contents",
            },
          },
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-58JZWQT",
        includeInDevelopment: false,
        defaultDataLayer: function () {
          return {
            pageType: window.pageType,
          }
        },
      },
    },
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: [
          "https://salesiq.zoho.com",
          "https://css.zohostatic.com",
          "https://js.zohostatic.com",
          "https://vts.zohopublic.com",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://gofloaters.com`,
      },
    },
  ],
}
