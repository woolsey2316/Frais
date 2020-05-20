import React from "react"
import Style from '../styles/subsection.module.scss'

export default ({heading, description}) => {
  return (
    <React.Fragment>
      <h1 className={Style.heading}>{heading}</h1>
      <p className={Style.description___justify}>{description}</p>
    </React.Fragment>
  )
}