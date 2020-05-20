import React from "react"
import { graphql, StaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import Style from "../styles/landing-page.module.scss"
import buttonStyle from "../styles/button.module.scss"


export default ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "canvas.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1440) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={Style.mainImage}
          fluid={imageData}
          style={{
            // Defaults are overwrite-able by setting one or each of the following:
            position: "relative",
            overflow: "visible",
            height: "100vh",
            width: "65vw",
          }}
        >
          <div className={Style.textContainer}>
            <h1 className={Style.heading}>Just like Nature <br/>Intended</h1>
            <p className={Style.subtext}>Handcrafted organic Soaps & Candles</p>
            <a href="/ShopAll" className={buttonStyle.button} type="button">
              Shop Now
            </a>
          </div>
        </BackgroundImage>
      )
    }}
  />
)
