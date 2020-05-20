import React, { useState } from 'react'

import Style from '../styles/instagram.module.scss'
import buttonStyle from '../styles/button.module.scss'

export default props => {
  const [show, showMore] = useState(false);
  const showExtra = () => {
    showMore(!show)
  }
  const arr = React.Children.toArray(props.children)
  return <div className={Style.container}>
    {arr.filter((val, ind, arr) => (ind < 8) || show)}
    <div style={{ width:'100%' }}/>
    {
      !show && <button className={buttonStyle.showMoreButton} type="button" onClick={() => showExtra()}> Show More </button>
    }
    </div>
}
