import React from "react"
import EmailForm from "../containers/EmailForm"
import Style from "../styles/site-navigation.module.scss"

export default () => {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>
      <h3 className={Style.heading}>Newsletter</h3>
      <EmailForm/>
    </div>
  )
}
