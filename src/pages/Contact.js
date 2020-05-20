import React from 'react'
import Layout from '../component/layout'
import SEO from '../component/seo'
import SectionTitle  from '../component/SectionTitle'
import ContactForm from '../container/ContactForm'
import ContactDetails from '../component/ContactDetails'
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