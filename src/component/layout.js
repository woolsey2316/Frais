/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../container/Footer'
import SiteNavigation from '../container/SiteNavigation'
import Style1 from '../styles/site-navigation.module.scss'
import Style2 from '../styles/navlink.module.scss'
import style from '../styles/layout.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <h1 className={style.banner}>FREE SHIPPING ON ORDERS OVER $50</h1>
      <SiteNavigation style={[Style1.horizontalNav, Style2.horizontalLink]} />
      <main className={style.container}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
