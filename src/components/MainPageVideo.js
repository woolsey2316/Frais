import React from "react"
import Video from "../videos/cutting-soap.mp4"
import Style from "../styles/favourites.module.scss"

export default () => (
  <video className={Style.mainContainer__video} controls>
    <source src={Video} type="video/mp4" />
  </video>
)