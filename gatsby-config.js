module.exports = {
  siteMetadata: {
    title: `Operate First`,
    siteUrl: `https://operate-first.cloud/`,
  },
  plugins: [
    'gatsby-plugin-mantine',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-178212082-1',
        head: true,
      },
    },
  ],
}
