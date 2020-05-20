import React from 'react'
import Image from '../component/image'
import Style from '../styles/instagram.module.scss'
export default (props) => {
  let Albulm = [];
  for (let i=0; i < props.size; i++) {
    Albulm.push(
      <Image filename={i + '.png'}/>
    )
  }
  return (
    <div className={Style.container}>
      {Albulm}
    </div>
  )
}