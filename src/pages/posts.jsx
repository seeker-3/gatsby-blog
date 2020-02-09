import React from 'react'

export default ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => {
  return (
    <>
      <p>posts!</p>
      {posts.map(({ node: { id, frontmatter: { title, date } } }) => (
        <p key={id}>
          {title} {date}
        </p>
      ))}
    </>
  )
}

export const pageQuery = graphql`
  query menuItemsIndexQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
