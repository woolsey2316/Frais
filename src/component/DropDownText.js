import React, { useState } from 'react'
import Style from '../styles/DropDownText.module.scss'

export default ({ title, text }) => {
  const [show, setShow] = useState(false)
  const clicked = () => {
    setShow(!show)
  }
  return (
    <div>
      <button className={Style.button} onClick={clicked}>
        {title}
      </button>
      <button className={Style.plusButton} onClick={clicked}>
        +
      </button>
      {show && <p className={Style.text}>{text}</p>}
    </div>
  )
}
