import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "instagram-feed/1.png" }) {
          childImageSharp {
            fluid(maxWidth: 348, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const imageFluid = data.file.childImageSharp.fluid
      return <Img alt="plant" fluid={imageFluid} />
    }}
  />
)
