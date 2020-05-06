import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import SectionTitle  from '../components/SectionTitle'
import ProductList from '../containers/ProductList'

export default () => {
  return (
    <Layout>
      <SEO title="Shop All" />
      <SectionTitle heading="ALL PRODUCTS" description="Made of natural and organic ingredients"/>
      <ProductList filterFunction={(product) => ( typeof product.type === "string")}/>
    </Layout>
  )
}