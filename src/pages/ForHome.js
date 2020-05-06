import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import SectionTitle  from '../components/SectionTitle'
import ProductList from '../containers/ProductList'

export default () => {
  return (
    <Layout>
    <SEO title="For Home" />
    <SectionTitle heading="Scented Candles" description="Our naturally fragranced candles come in plastic-free, high quality containers"/>
    <ProductList filterFunction={(product) => ( product.type === "candle")}/>
  </Layout>
  )
}