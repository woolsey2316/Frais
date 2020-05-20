import React from 'react'
import Video from '../videos/cutting-soap.mp4'
import Style from '../styles/favourites.module.scss'

export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    }}
  >
    <video className={Style.MainContainer__video} width="100%">
      <source src={Video} type="video/mp4" />
    </video>
  </div>
)
