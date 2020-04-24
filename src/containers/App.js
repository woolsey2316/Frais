import React from 'react';

import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SiteNavigation from "../containers/SiteNavigation"
import WebsiteTitle from "../components/WebsiteTitle"
import Canvas from '../components/Canvas'
import OurFavourites from '../components/OurFavourites'
import NaturallySimple from '../components/NaturallySimple'
import Instagram from './Instagram'
import Footer from './Footer'

import Style1 from "../styles/site-navigation.module.scss"
import Style2 from "../styles/navlink.module.scss"

export default () => (
  <React.Fragment>
    <SEO title="Home" />
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <WebsiteTitle/>
      <SiteNavigation style={[Style1.horizontalNav, Style2.horizontalLink]} />
    </div>
    <Canvas/>
    <OurFavourites/>
    <NaturallySimple/>
    <Instagram/>
    <Footer/>
  </React.Fragment>
)