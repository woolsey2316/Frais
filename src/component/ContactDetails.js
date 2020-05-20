import React from 'react'
import Style from '../styles/contact-details.module.scss'

export default () => {
  return (
    <div className={Style.outer}>
      <p className={Style.description}>
        If you have questions or special inquiries, you're welcome to contact me
        or fill out this form
      </p>
      <p className={Style.description___green}>
        ALISON MATTHEWS
        <br />
        Tel: 123-456-7890
        <br />
        Email: info@my-domain.com
      </p>
    </div>
  )
}
