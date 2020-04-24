import React from "react"
import { Link } from "gatsby"
import Style from "../styles/navlink.module.scss"

const NavLink = props => {
  const url = props.name === "Home" ? "" : props.name.replace(/ /g, "")
  return (
    <Link
      to={'/'+url}
      className={props.style}
      activeClassName="active"
      activeStyle={{ color: "#5ba827" }}
    >
      {props.name}
    </Link>
  )
}

export default NavLink
