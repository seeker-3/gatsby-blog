import React from 'react'
import { useStaticQuery, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const render = data => {
  console.log('hi', data)

  return (
    <>
      <p>slider!</p>
      {data.allImageSharp.edges.map(({ node: { id, fixed } }) => (
        <>
          <img src={fixed.src} alt="" />
        </>
      ))}
    </>
  )
}

export default () => {
  const data = useStaticQuery(graphql`
    query imagesIndexQuery {
      allImageSharp {
        edges {
          node {
            id
            fixed {
              src
            }
          }
        }
      }
    }
  `)
  return render(data)
}

// export default () => {
//   return (
//     <StaticQuery>
//       query=
//       {graphql`
//         query imagesIndexQuery {
//           allImageSharp {
//             edges {
//               node {
//                 id
//                 fixed
//               }
//             }
//           }
//         }
//       `}
//       render={render}
//     </StaticQuery>
//   )
// }
