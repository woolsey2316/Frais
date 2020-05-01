import React from 'react'
import Style from '../styles/favourites.module.scss'
import buttonStyle from '../styles/button.module.scss'
import MainPageVideo from '../components/MainPageVideo'
import CandleSpoonImage from '../components/CandleSpoonImage'
import SectionTitle from '../components/SectionTitle'

export default () => {
  return (
    <React.Fragment>
      <SectionTitle heading="Our Favorites"/>
      <div className={Style.MainContainer}>
        <div className={Style.MainContainer__topCorner}>
          <h3 className={Style.h3}>Probiotic <br/> Cleansing Bars</h3>
          <p className={Style.p}>I'm a paragraph. Click here to add your own text 
          and edit me. Let your users get to know you.</p>
          <a className={buttonStyle.button}>Shop Soaps</a>
        </div>
        <MainPageVideo/>
        <div className={Style.MainContainer__bottomLeft}>
          <CandleSpoonImage/>
        </div>
        <div className={Style.MainContainer__bottomRight}>
          <h3 className={Style.h3}>Nature's Essence Scented Candles</h3>
          <p className={Style.p}>I'm a paragraph. Click here to add your own text 
          and edit me. Let your users get to know you.</p>
          <a className={buttonStyle.button}>Shop Candles</a>
        </div>
      </div>
      </React.Fragment>
  )
}