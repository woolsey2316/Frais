import React from 'react'
import Style1 from '../styles/site-navigation.module.scss'
import Style2 from '../styles/navlink.module.scss'
import NavLink from '../component/NavLink'

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <h3 className={Style1.heading}>Frais</h3>
      <NavLink style={Style2.verticalLink} name="Shop All" />
      <NavLink style={Style2.verticalLink} name="For Body" />
      <NavLink style={Style2.verticalLink} name="For Home" />
      <NavLink style={Style2.verticalLink} name="About" />
      <NavLink style={Style2.verticalLink} name="Contact" />
    </div>
  )
}
