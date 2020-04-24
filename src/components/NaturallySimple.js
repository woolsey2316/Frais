import React from 'react'
import HoldingLeafImage from './HoldingLeafImage'
import Style from '../styles/naturally-simple.module.scss'

export default () => {
  return (
    <React.Fragment>
      <h1 className={Style.h1}>Naturally Simple</h1>
      <p className={Style.p}>I'm a paragraph. Click here to add your own text and edit me. 
      It’s easy. Just click “Edit Text” or double click me to add your own content and make 
      changes to the font. I’m a great place for you to tell a story and let your users know 
      a little more about you.</p>
      <div className={Style.container}>
        <HoldingLeafImage/>
        <q className={Style.q}>I'm a testimonial. Click to edit me and add text that says
        something nice about you and your services</q>
        <p className={Style.p}>Mia, San Francisco</p>
        <a className={Style.a}>Learn More</a>
      </div>
    </React.Fragment>
  )
}