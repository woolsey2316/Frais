import React from 'react'
import Image from '../components/image'

export default (props) => {
  let Albulm = [];
  for (let i=0; i < props.size; i++) {
    Albulm.push(
      <Image filename={i + '.png'}/>
    )
  }
  return (
    <div style={{display: 'flex'}}>
      {Albulm}
    </div>
  )
}