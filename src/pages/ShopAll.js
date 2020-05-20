import React from 'react'
import Layout from '../component/layout'
import SEO from '../component/seo'
import SectionTitle  from '../component/SectionTitle'
import ProductList from '../container/ProductList'

export default () => {
  return (
    <Layout>
      <SEO title="Shop All" />
      <SectionTitle heading="ALL PRODUCTS" description="Made of natural and organic ingredients"/>
      <ProductList filterFunction={(product) => ( typeof product.type === "string")}/>
    </Layout>
  )
}