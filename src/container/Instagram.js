import React from 'react'
import InstagramAlbulm from './InstagramAlbulm'
import Image from '../component/image'
import textStyle from '../styles/text.module.scss'

export default () => {
  let Albulm = [];
  for (let i = 0; i < 12; i++) {
    Albulm.push(<Image filename={i + '.png'} />)
  }
  return (
    <React.Fragment>
      <h1 className={textStyle.heading}> #FRAIS</h1>
      <InstagramAlbulm>{Albulm}</InstagramAlbulm>
    </React.Fragment>
  )
}
