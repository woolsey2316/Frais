import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import style from '../styles/zoomable-media.module.scss'
import styled from 'styled-components'

const Hover = styled.div`
  overflow: hidden;
`

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 350, maxHeight: 450, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      const imagefluid = image.node.childImageSharp.fluid
      return (
        <Hover>
          <Img className={style.image} alt={props.alt} fluid={imagefluid} />
        </Hover>
      )
    }}
  />
)
export default Image
