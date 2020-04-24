import React from "react"
import Video from "../videos/cutting-soap.mp4"
import Style from "../styles/favourites.module.scss"

export default () => (
  <video className={Style.MainContainer__video} verticalAlign="end">
    <source src={Video} type="video/mp4" />
  </video>
)