import React from 'react'
import FraisLink from './FraisLink'
import HelpLink from './HelpLink'
import ContactLink from './ContactLink'
import Newsletter from './Newsletter'

export default () => {
  return (
    <React.Fragment>
      <hr style={{borderTop: '0.1em solid rgba(66, 66, 66, 1)', margin:'0em 7em'}}/>
      <div style={{display: "flex", justifyContent: "space-around", margin:"0em 8em"}}>
        <FraisLink/>
        <HelpLink/>
        <ContactLink/>
        <Newsletter/>
      </div>
    </React.Fragment>
  )
}