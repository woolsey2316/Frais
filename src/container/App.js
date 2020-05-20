import React from 'react'

import SEO from '../component/seo'
import SiteNavigation from './SiteNavigation'
import Canvas from '../component/Canvas'
import OurFavourites from '../component/OurFavourites'
import NaturallySimple from '../component/NaturallySimple'
import Instagram from './Instagram'
import Footer from './Footer'
import SideNavBar from './SideNavBar'

export default () => (
  <React.Fragment>
    <SEO title="Home" />
    <SideNavBar />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '3.5%',
      }}
    >
      <SiteNavigation />
    </div>
    <Canvas />
    <OurFavourites />
    <NaturallySimple />
    <Instagram />
    <Footer />
  </React.Fragment>
)
