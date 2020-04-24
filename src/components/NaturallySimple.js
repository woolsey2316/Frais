import React from 'react'
import HoldingLeafImage from './HoldingLeafImage'
import Style from '../styles/naturally-simple.module.scss'

export default () => {
  return (
    <div className={Style.MainContainer}>
      <h1 className={Style.MainContainer_title}>Naturally Simple</h1>
      <p className={Style.description}>I'm a paragraph. Click here to add your own text and edit me. 
      It’s easy. Just click “Edit Text” or double click me to add your own content and make 
      changes to the font. I’m a great place for you to tell a story and let your users know 
      a little more about you.</p>
      <div className={Style.SubContainer}>
        <div style={{display:'flex', justifyContent:'flex-end'}}>
          <HoldingLeafImage/>
        </div>
        <div className={Style.SubContainer__text}>
          <q className={Style.q}>I'm a testimonial. Click to edit me and add text that says
          something nice about you and your services</q>
          <p className={Style.SubContainer__personName}>Mia, San Francisco</p>
          <a className={Style.SubContainer__button}>Learn More</a>
        </div>
      </div>
    </div>
  )
}