const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            author
            date(fromNow: true)
            description
          }
        }
      }
    }
  `)
  const templatePath = path.resolve(`components/BlogTemplate.js`)

  result.data.allMdx.forEach((node) => {
    createPage({
      path: node.id,
      component: templatePath,

    })
  })
}
