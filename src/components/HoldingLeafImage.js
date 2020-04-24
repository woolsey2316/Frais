import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => (
  <StaticQuery
    query={graphql`
    query {
      file(relativePath: { eq: "hand-leaf.png" }) {
        childImageSharp {
          fluid(maxWidth: 2376, quality:90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
    render={data => {
      const imageFluid = data.file.childImageSharp.fluid
      return (
        <Img alt='person holding leaf' fluid={imageFluid} style={{height:'100%',width:'85%'}}/>
      )
    }}
  />
)
