import React from 'react'
import Layout from '../component/layout'
import SEO from '../component/seo'
import style from '../styles/section.module.scss'
import ContactForm from '../container/ContactForm'
import ContactDetails from '../component/ContactDetails'
import Style from '../styles/contact.module.scss'

export default () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1 className={style.heading__centered}>Let's Talk</h1>
      <div className={Style.container}>
        <ContactDetails />
        <ContactForm />
      </div>
    </Layout>
  )
}
