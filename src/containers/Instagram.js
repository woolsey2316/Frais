import React from 'react'
import InstagramAlbulm from './InstagramAlbulm'
import Style from '../styles/instagram.module.scss'
import SectionTitle from '../components/SectionTitle'

export default () => {
  return (
    <React.Fragment>
      <SectionTitle heading="#FRAIS"></SectionTitle>
      <InstagramAlbulm size={12}/>
    </React.Fragment>
  )
}