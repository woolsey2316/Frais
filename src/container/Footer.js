import React from 'react'
import FraisLink from './FraisLink'
import HelpLink from './HelpLink'
import ContactLink from './ContactLink'
import Newsletter from './Newsletter'
import style from '../styles/footer.module.scss'

export default () => {
  return (
    <React.Fragment>
      <hr
        className={style.hr}
      />
      <div
        className={style.outerDiv}
      >
        <FraisLink />
        <HelpLink />
        <ContactLink />
        <Newsletter />
      </div>
    </React.Fragment>
  )
}
