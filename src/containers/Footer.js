import React from 'react'
import FraisLink from './FraisLink'
import HelpLink from './HelpLink'
import ContactLink from './ContactLink'
import NewsLetter from './NewsLetter'

export default () => {
  return (
    <div style={{display: "flex", justifyContent: "space-around"}}>
      <FraisLink/>
      <HelpLink/>
      <ContactLink/>
      <NewsLetter/>
    </div>
  )
}