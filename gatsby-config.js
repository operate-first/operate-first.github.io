module.exports = {
  siteMetadata: {
    title: `Operate First`,
    siteUrl: `https://operate-first.cloud/`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
      options: {
        basePath: '/blog',
      },
    },

    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-mantine',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        lessBabel: true,
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
              backgroundColor: `transparent`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'UA-178212082-1', // Universal Analytics (ends 2023-02)
          'G-TNPDM9W9HY', // GA4 operate-first - GA4
          'G-4KZBK0GHEG', // GA4 operate-first - 2022
        ],
        pluginConfig: {
          head: true,
        },
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/opf-logo.png`,
      },
    },
  ],
};
