import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'

export default () => {
  const {
    allMarkdownRemark: { edges: images },
  } = useStaticQuery(graphql`
    query imagesIndexQuery {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "slider-image" } } }
      ) {
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
  `)
  return (
    <>
      <p>slider!</p>
      {images.map(({ node: { id, frontmatter: { title } } }) => (
        <img key={id} src={title} alt="" />
      ))}
    </>
  )
}
