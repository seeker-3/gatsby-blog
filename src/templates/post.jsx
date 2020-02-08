import React from 'react'
import { graphql, Link } from 'gatsby'

export default ({
  data: {
    markdownRemark: {
      frontmatter: { title },
      html: __html,
    },
  },
}) => {
  return (
    <>
      <Link to="/posts">back</Link>
      <p>{title}</p>
      <div dangerouslySetInnerHTML={{ __html }} />
    </>
  )
}

export const postQuery = graphql`
  query PostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
