import React from 'react'
import { graphql } from 'gatsby'
import MenuItem from '../../components/menu-item.jsx'

export default ({
  data: {
    allMarkdownRemark: { edges: menuItems },
  },
}) => {
  return (
    <div>
      {menuItems.map(({ node: { id, frontmatter: props } }) => (
        <MenuItem key={id} {...props} />
      ))}
    </div>
  )
}

export const pageQuery = graphql`
  query menuItemsIndexQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "menu-item" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            price
            description
          }
        }
      }
    }
  }
`
