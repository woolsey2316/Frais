import React from 'react'
import Layout from '../component/layout'
import SEO from '../component/seo'
import style from '../styles/section.module.scss'
import ProductList from '../container/ProductList'

export default () => {
  return (
    <Layout>
      <SEO title="For Home" />
      <h1 className={style.heading__centered}>Scented Candles</h1>
      <p className={style.description__centered}>
        Our naturally fragranced candles come in plastic-free, high quality
        containers
      </p>
      <ProductList filterFunction={product => product.type === 'candle'} />
    </Layout>
  )
}
