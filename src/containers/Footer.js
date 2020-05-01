import React from 'react'
import FraisLink from './FraisLink'
import HelpLink from './HelpLink'
import ContactLink from './ContactLink'
import NewsLetter from './NewsLetter'

export default () => {
  return (
    <React.Fragment>
      <hr/>
      <div style={{display: "flex", justifyContent: "space-around", marginLeft: "10%"}}>
        <FraisLink/>
        <HelpLink/>
        <ContactLink/>
        <NewsLetter/>
      </div>
    </React.Fragment>
  )
}