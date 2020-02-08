// import React from 'react'
// import { graphql, Link } from 'gatsby'

// export default ({ data }) => {
//   if (data) {
//     const {
//       markdownRemark: {
//         frontmatter: { title },
//         html: __html,
//       },
//     } = data
//     return (
//       <>
//         <Link to="/posts">back</Link>
//         <p>{title}</p>
//         <div dangerouslySetInnerHTML={{ __html }} />
//       </>
//     )
//   }
//   return null
// }

// export const postQuery = graphql`
//   query PostByID($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `
