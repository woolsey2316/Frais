import React, { useState, useRef } from 'react'
import NavLink from '../component/NavLink'
import WebsiteTitle from '../component/WebsiteTitle'
import Style1 from '../styles/site-navigation.module.scss'
import Style2 from '../styles/navlink.module.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default props => {
  const [showMenu, setShow] = useState(true)
  const showNav = () => {
    setShow(!showMenu)
  }
  return (
    <nav
      className={
        showMenu ? Style1.horizontalNav : Style1.horizontalNav__collapsed
      }
    >
      <WebsiteTitle />
      {showMenu && (
        <React.Fragment>
          <NavLink style={Style2.horizontalLink} name="Shop All" />
          <NavLink style={Style2.horizontalLink} name="For Body" />
          <NavLink style={Style2.horizontalLink} name="For Home" />
          <NavLink style={Style2.horizontalLink} name="About" />
          <NavLink style={Style2.horizontalLink} name="Contact" />
        </React.Fragment>
      )}
      <button className={Style1.menuButton} onClick={() => showNav()}>
        <FontAwesomeIcon
          className={Style1.hamburgerMenu}
          icon={showMenu ? 'times' : 'bars'}
        />
      </button>
    </nav>
  )
}
