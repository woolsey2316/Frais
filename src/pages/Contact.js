import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import SectionTitle  from '../components/SectionTitle'
import ContactForm from '../containers/ContactForm'
import ContactDetails from '../components/ContactDetails'
import Style from '../styles/contact.module.scss'

export default () => {
  return (
    <Layout>
    <SEO title="Contact" />
    <SectionTitle heading="Let's Talk"/>
    <div className={Style.container}>
      <ContactDetails/>
      <ContactForm/>
    </div>
  </Layout>
  )
}