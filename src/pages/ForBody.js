import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import SectionTitle  from '../components/SectionTitle'
import ProductList from '../containers/ProductList'

export default () => {
  return (
    <Layout>
    <SEO title="For Body" />
    <SectionTitle heading="Probiotic Soaps" description="All our soaps are handcrafted and alcohol free"/>
    <ProductList filterFunction={(product) => ( product.type === "soap")}/>
  </Layout>
  )
}