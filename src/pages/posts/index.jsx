import React from 'react'
import { graphql, Link } from 'gatsby'

export default ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => {
  return (
    <>
      <p>welcome to my posts page</p>
      {posts.map(({ node: { id, frontmatter: { title } } }) => (
        <Link key={id} to={`/posts/${id}`}>
          {title}
        </Link>
      ))}
    </>
  )
}

export const postsQuery = () => graphql`
  query postsIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`
