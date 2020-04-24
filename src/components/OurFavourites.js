import React from 'react'
import Style from '../styles/favourites.module.scss'
import buttonStyle from '../styles/button.module.scss'
import MainPageVideo from '../components/MainPageVideo'
import CandleSpoonImage from '../components/CandleSpoonImage'
import PaintedWoodImage from '../components/PaintedWoodImage'

export default () => {
  return (
    <React.Fragment>
      <h1 className={Style.h1}>Our Favorites</h1>
      <div className={Style.mainContainer}>
        <div className={Style.mainContainer__topCorner}>
          <h3 className={Style.h3}>Probiotic <br/> Cleansing Bars</h3>
          <p className={Style.p}>I'm a paragraph. Click here to add your own text 
          and edit me. Let your users get to know you.</p>
          <a className={buttonStyle.button}>Shop Soaps</a>
        </div>
        <MainPageVideo/>
        <div className={Style.mainContainer__bottomLeft}>
          <CandleSpoonImage/>
        </div>
        <div className={Style.mainContainer__bottomCorner}>
          <h3 className={Style.h3}>Nature's Essence Scented Candles</h3>
          <p className={Style.p}>I'm a paragraph. Click here to add your own text 
          and edit me. Let your users get to know you.</p>
          <a className={buttonStyle.button}>Shop Candles</a>
        </div>
      </div>
      </React.Fragment>
  )
}