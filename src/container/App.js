import React from 'react';

import SEO from "../component/seo"
import SiteNavigation from "./SiteNavigation"
import Canvas from '../component/Canvas'
import OurFavourites from '../component/OurFavourites'
import NaturallySimple from '../component/NaturallySimple'
import Instagram from './Instagram'
import Footer from './Footer'
import SideNavBar from "./SideNavBar"

import Style1 from "../styles/site-navigation.module.scss"
import Style2 from "../styles/navlink.module.scss"

export default () => (
  <React.Fragment>
    <SEO title="Home" />
    <SideNavBar/>
    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '3.5%'}}>
      <SiteNavigation style={[Style1.horizontalNav, Style2.horizontalLink]} />
    </div>
    <Canvas/>
    <OurFavourites/>
    <NaturallySimple/>
    <Instagram/>
    <Footer/>
  </React.Fragment>
)