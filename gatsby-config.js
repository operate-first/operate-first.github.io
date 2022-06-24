module.exports = {
  siteMetadata: {
    title: `Operate First`,
    siteUrl: `https://operate-first.cloud/`,
  },
  plugins: [
   'gatsby-plugin-catch-links'
    ,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      },
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    'gatsby-plugin-mantine',
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-178212082-1',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/opf-logo.png`
      },
    },

  ],
}
