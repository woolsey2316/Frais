import React from "react"
import navStyle from "../styles/site-navigation.module.scss"
import SocialMediaQuilt from "./SocialMediaQuilt"
import Style from '../styles/social-media-quilt.module.scss'

export default (props) => {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>
      <h3 className={navStyle.heading}>Contact</h3>
      <nav className={navStyle.verticalNav}>
        <p className={navStyle.verticalNav}>123-456-7890</p>
        <p className={navStyle.verticalNav}>info@myDomain.com</p>
      </nav>
      <SocialMediaQuilt styles={{ul: Style.ul___horizontal, li: Style.li___horizontal}} color="black"/>
    </div>
  )
}