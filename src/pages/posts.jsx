import React from 'react'
import { Link, graphql } from 'gatsby'

export default ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => {
  return (
    <div>
      {posts.map(({ node: { id, frontmatter: { title, date } } }) => (
        <div>
          <Link key={id} to={`posts/${id}`}>
            {title}
          </Link>
        </div>
      ))}
    </div>
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
