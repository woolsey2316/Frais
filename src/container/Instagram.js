import React from 'react'
import InstagramAlbulm from './InstagramAlbulm'
import textStyle from '../styles/text.module.scss'

export default () => {
  return (
    <React.Fragment>
      <h1 className={textStyle.heading}> #FRAIS</h1>
      <InstagramAlbulm size={12}/>
    </React.Fragment>
  )
}