import React from 'react'
import Layout from '../component/layout'
import SEO from '../component/seo'
import SectionTitle  from '../component/SectionTitle'
import ProductList from '../container/ProductList'

export default () => {
  return (
    <Layout>
    <SEO title="For Home" />
    <SectionTitle heading="Scented Candles" description="Our naturally fragranced candles come in plastic-free, high quality containers"/>
    <ProductList filterFunction={(product) => ( product.type === "candle")}/>
  </Layout>
  )
}