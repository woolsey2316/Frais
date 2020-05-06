import React from 'react'
import FraisLink from './FraisLink'
import HelpLink from './HelpLink'
import ContactLink from './ContactLink'
import NewsLetter from './NewsLetter'

export default () => {
  return (
    <React.Fragment>
      <hr style={{borderTop: '0.1em solid rgba(66, 66, 66, 1)'}}/>
      <div style={{display: "flex", justifyContent: "space-around", marginLeft: "10%"}}>
        <FraisLink/>
        <HelpLink/>
        <ContactLink/>
        <NewsLetter/>
      </div>
    </React.Fragment>
  )
}