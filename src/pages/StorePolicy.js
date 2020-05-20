import React from 'react'
import SubSection from '../component/SubSection'
import SectionTitle from '../component/SectionTitle'
import Layout from '../component/layout'
import SEO from '../component/seo'
import Style from '../styles/subsection.module.scss'

export default () => {
  return (
    <Layout>
      <SEO title="Store Policy" />
      <SectionTitle heading="Store Policy" />
      <br />
      <br />
      <SubSection
        heading="Customer Care"
        description="I’m a customer care section. I’m a great place to write a long text about your company and your services, and, most importantly, how to contact your store with queries. 
      Writing a detailed Customer Care policy is a great way to build trust and reassure your customers that they can buy with confidence."
      />
      <SubSection
        heading="Privacy & Safety"
        description="I’m a privacy & safety policy section. I’m a great place to inform your customers about how you use, store, and protect their personal information. 
      Add details such as how you use third-party banking to verify payment, the way you collect data or when will you contact users after their purchase was completed successfully."
      />
      <SubSection
        heading="WholeSale Inquiries"
        description="I’m a wholesale inquiries section. I’m a great place to inform other retailers about how they can sell your stunning products. Use plain language 
      and give as much information as possible in order to promote your business and take it to the next level!"
      />
      <SubSection heading="Payment Methods" />
      <p className={Style.description___justify}>
        - Credit / Debit Cards <br />
        - PAYPAL <br />- Offline Payments/>
      </p>
    </Layout>
  )
}
