import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => (
  <StaticQuery
    query={graphql`
    query {
      file(relativePath: { eq: "painted-wood.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
    render={data => {
      const imageFluid = data.file.childImageSharp.fluid
      return <Img alt='wodd with flaky paint' fluid={imageFluid} />
    }}
  />
)
