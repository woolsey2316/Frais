import React from 'react'
import Style from '../styles/favourites.module.scss'
import textStyle from '../styles/text.module.scss'
import buttonStyle from '../styles/button.module.scss'
import MainPageVideo from '../component/MainPageVideo'
import CandleSpoonImage from '../component/CandleSpoonImage'

export default () => {
  return (
    <React.Fragment>
      <h1 className={textStyle.heading}>Our Favorites</h1>
      <div className={Style.MainContainer}>
        <div className={Style.MainContainer__topCorner}>
          <h3 className={Style.h3}>
            Probiotic Cleansing Bars
          </h3>
          <p className={Style.p}>
            I'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </p>
          <a className={buttonStyle.button} href="/ForBody">
            Shop Soaps
          </a>
        </div>
        <MainPageVideo />
        <div className={Style.MainContainer__bottomLeft}>
          <CandleSpoonImage />
        </div>
        <div className={Style.MainContainer__bottomRight}>
          <h3 className={Style.h3}>Nature's Essence Scented Candles</h3>
          <p className={Style.p}>
            I'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </p>
          <a className={buttonStyle.button} href="/ForHome">
            Shop Candles
          </a>
        </div>
      </div>
    </React.Fragment>
  )
}
