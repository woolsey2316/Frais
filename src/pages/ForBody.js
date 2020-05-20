import React from 'react'
import Layout from '../component/layout'
import SEO from '../component/seo'
import SectionTitle  from '../component/SectionTitle'
import ProductList from '../container/ProductList'

export default () => {
  return (
    <Layout>
    <SEO title="For Body" />
    <SectionTitle heading="Probiotic Soaps" description="All our soaps are handcrafted and alcohol free"/>
    <ProductList filterFunction={(product) => ( product.type === "soap")}/>
  </Layout>
  )
}