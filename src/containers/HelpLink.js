import React from "react"
import NavLink from "../components/NavLink"
import navStyle from "../styles/site-navigation.module.scss"
import linkStyle from "../styles/navlink.module.scss"
import { Link } from "gatsby"

export default (props) => {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>
      <h3 className={navStyle.heading}>Help</h3>
      <nav className={navStyle.verticalNav}>
        <NavLink style={linkStyle.verticalLink} name="Shipping & Returns" />
        <NavLink style={linkStyle.verticalLink} name="Store Policy" />
        <NavLink style={linkStyle.verticalLink} name="Payment Methods" />
        <Link
          to={'/StorePolicy/#Payment Methods'}
          className={props.style}
          activeClassName="active"
          activeStyle={{ color: "#839c83" }}
        >
          {props.name}
        </Link>
      </nav>
    </div>
  )
}