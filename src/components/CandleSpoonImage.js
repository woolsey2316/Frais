import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => (
  <StaticQuery
    query={graphql`
    query {
      file(relativePath: { eq: "candle-on-painted-wood.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality:90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
    render={data => {
      const imageFluid = data.file.childImageSharp.fluid
      return <Img style={{height:'100%',width:'100%'}} alt='spoon with melted wax' fluid={imageFluid} />
    }}
  />
)
