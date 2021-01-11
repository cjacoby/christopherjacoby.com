// Initialize dotenv
require('dotenv').config({path: `.env`});

module.exports = {
  siteMetadata: {
    title: `christopherjacoby.com`,
    description: `Personal website.`,
    author: `@cjacoby`,
    menuLinks: [
      {
        name:'home',
        link:'/'
      },
      {
        name:'blog',
        link:'/blog'
      },
      // {
      //   name:'music',
      //   link:'/music'
      // }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-transformer-remark`,
      // options: {
      //   plugins: [
      //     `gatsby-remark-prismjs`
      //   ]
      // }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },    
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `applfOP9Jlzf5Oaqf`,
            tableName: `CMS`
          },
          {
            baseId: `applfOP9Jlzf5Oaqf`,
            tableName: `Gigs`,
            tableView: `Future Gigs`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-163775948-1",
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.S3_BUCKET,
      },
    }
    // `gatsby-plugin-feed`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
