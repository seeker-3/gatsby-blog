import React from 'react'
import { Link } from 'gatsby'

export default ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => {
  return (
    <>
      <p>posts!</p>
      {posts.map(({ node: { id, frontmatter: { title, date } } }) => (
        <div>
          <Link key={id} to={`posts/${id}`}>
            {title} {date}
          </Link>
        </div>
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
