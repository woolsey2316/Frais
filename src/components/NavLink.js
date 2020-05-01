import React from "react"
import { Link } from "gatsby"

const NavLink = props => {
  const url = props.name === "Home" ? "" : props.name.replace(/ /g, "")
  return (
    <Link
      to={'/'+url}
      className={props.style}
      activeClassName="active"
      activeStyle={{ color: "#839c83" }}
    >
      {props.name}
    </Link>
  )
}

export default NavLink
