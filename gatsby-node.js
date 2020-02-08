const { resolve } = require('path')

exports.createPages = ({ actions: { createPage }, graphql }) => {
  const component = resolve('src/templates/post.jsx')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then(
    ({
      errors,
      data: {
        allMarkdownRemark: { edges: posts },
      },
    }) => {
      if (errors) {
        errors.forEach(e => console.error(e.toString()))
        return Promise.reject(errors)
      }

      posts.forEach(
        ({
          node: {
            frontmatter: { path },
          },
        }) => {
          createPage({
            path,
            component,
          })
        }
      )
    }
  )
}
