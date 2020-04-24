import React from 'react'
import InstagramAlbulm from './InstagramAlbulm'
import Style from '../styles/instagram.module.scss'

export default () => {
  return (
    <React.Fragment>
      <h1 className={Style.title}>#FRAIS</h1>
      <InstagramAlbulm size={12}/>
    </React.Fragment>
  )
}