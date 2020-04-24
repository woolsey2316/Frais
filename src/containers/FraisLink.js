import React from "react"
import SiteNavigation from "./SiteNavigation"
import Style1 from "../styles/site-navigation.module.scss"
import Style2 from "../styles/navlink.module.scss"

export default () => {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent: "flex-start"}}>
      <h3 className={Style1.heading}>Frais</h3>
      <SiteNavigation style={new Array(Style1.verticalNav, Style2.verticalLink)}/>
    </div>
  )
}