import React from 'react'
import SubSection from '../components/SubSection'
import SectionTitle from '../components/SectionTitle'
import Layout from '../components/Layout'

export default () => {
  return (
    <Layout>
      <SectionTitle heading="Store Policy"/>
      <SubSection heading="Customer Care" description="I’m a customer care section. I’m a great place to write a long text about your company and your services, and, most importantly, how to contact your store with queries. 
      Writing a detailed Customer Care policy is a great way to build trust and reassure your customers that they can buy with confidence."/>
      <SubSection heading="Privacy & Safety" description="I’m a privacy & safety policy section. I’m a great place to inform your customers about how you use, store, and protect their personal information. 
      Add details such as how you use third-party banking to verify payment, the way you collect data or when will you contact users after their purchase was completed successfully."/>
      <SubSection heading="WholeSale Inquiries" description="I’m a wholesale inquiries section. I’m a great place to inform other retailers about how they can sell your stunning products. Use plain language 
      and give as much information as possible in order to promote your business and take it to the next level!"/>
      <SubSection heading="Payment Methods" description="- Credit / Debit Cards
      - PAYPAL
      - Offline Payments"/>
    </Layout>
  )
}