import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => (
  <StaticQuery
    query={graphql`
    query {
      file(relativePath: { eq: "Alison.webp" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality:90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
    render={data => {
      const imageFluid = data.file.childImageSharp.fluid
      return (
        <Img alt='Alison' fluid={imageFluid} style={{height:'100%'}} />
      )
    }}
  />
)
