// const { resolve } = require('path')

// exports.createPages = ({ actions: { createPage }, graphql }) => {
//   const component = resolve('src/templates/post.jsx')

//   return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             html
//             id
//             frontmatter {
//               title
//               date
//             }
//           }
//         }
//       }
//     }
//   `).then(({ errors, data }) => {
//     if (errors) {
//       errors.forEach(e => console.error(e.toString()))
//       return Promise.reject(errors)
//     }

//     const posts = data.allMarkdownRemark.edges

//     posts.forEach(({ node: { id } }) => {
//       createPage({
//         path: `/posts/${id}`,
//         component,
//         context: {
//           id,
//         },
//       })
//     })
//   })
// }
