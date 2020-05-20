import React from 'react'
import SocialMediaQuilt from './SocialMediaQuilt'
import Style from '../styles/social-media-quilt.module.scss'
import style from '../styles/side-bar.module.scss'

export default () => {
  return (
    <div className={style.navbar}>
      <SocialMediaQuilt styles={{ul: Style.ul___vertical, li: Style.li___vertical}}/>
    </div>
  )
}
