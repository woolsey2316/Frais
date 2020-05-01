import React from "react"
import NavLink from "../components/NavLink"
import navStyle from "../styles/site-navigation.module.scss"
import linkStyle from "../styles/navlink.module.scss"
import SocialMediaQuilt from "./SocialMediaQuilt"
import Style from '../styles/social-media-quilt.module.scss'

export default (props) => {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>
      <h3 className={navStyle.heading}>Contact</h3>
      <nav className={navStyle.verticalNav}>
        <NavLink style={linkStyle.verticalLink} name="123-456-7890" />
        <NavLink style={linkStyle.verticalLink} name="info@myDomain.com" />
      </nav>
      <SocialMediaQuilt styles={{ul: Style.ul___horizontal, li: Style.li___horizontal}} color="black"/>
    </div>
  )
}