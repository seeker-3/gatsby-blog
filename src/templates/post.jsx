import React from 'react'
import { graphql } from 'gatsby'

export default ({
  data: {
    markdownRemark: {
      html: __html,
      frontmatter: { title },
    },
  },
}) => {
  return (
    <>
      <p>{title}</p>
      <div dangerouslySetInnerHTML={{ __html }} />
    </>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
      }
      html
    }
  }
`
