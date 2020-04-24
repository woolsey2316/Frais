import React from "react"
import NavLink from "../components/NavLink"
import navStyle from "../styles/site-navigation.module.scss"
import linkStyle from "../styles/navlink.module.scss"

export default (props) => {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>
      <h3>Contact</h3>
      <nav className={navStyle.verticalNav}>
        <NavLink style={linkStyle.verticalLink} name="123-456-7890" />
        <NavLink style={linkStyle.verticalLink} name="info@myDomain.com" />
      </nav>
    </div>
  )
}