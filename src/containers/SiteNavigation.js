import React from "react"
import NavLink from "../components/NavLink"
import WebsiteTitle from '../components/WebsiteTitle'

export default (props) => {
  return (
    <nav className={props.style[0]}>
      <WebsiteTitle/>
      <NavLink style={props.style[1]} name="Shop All" />
      <NavLink style={props.style[1]} name="For Body" />
      <NavLink style={props.style[1]} name="For Home" />
      <NavLink style={props.style[1]} name="About" />
      <NavLink style={props.style[1]} name="Contact" />
    </nav>
  )
}