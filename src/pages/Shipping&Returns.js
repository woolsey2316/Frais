import React from 'react'
import Layout from '../component/layout'
import SEO from '../component/seo'
import SectionTitle  from '../component/SectionTitle'
import SubSection  from '../component/SubSection'


export default () => {
  return (
    <Layout>
      <SEO title="Shipping and Returns" />
      <SectionTitle heading="Shipping & Returns"/>
      <br/>
      <br/ >
      <SubSection heading="Shipping Policy" description="I’m a shipping policy section. I’m a great place to update your customers about your shipping methods, packaging and costs. Use plain, straightforward language to build trust and make sure that your customers stay loyal!
      I'm the second paragraph in your shipping policy section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."/>
      <SubSection heading="Return & Exchange Policy" description="I’m a return policy section. I’m a great place to let your customers know what to do in case they’ve changed their mind about their purchase, or if they’re dissatisfied with a product. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.
      I'm the second paragraph in your return & exchange policy. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."/>

    </Layout>
  )
}