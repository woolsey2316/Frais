import React from 'react'
import Layout from '../component/layout'
import SEO from '../component/seo'
import style from '../styles/section.module.scss'
import ProductList from '../container/ProductList'

export default () => {
  return (
    <Layout>
      <SEO title="Shop All" />
      <h1 className={style.heading__centered}>ALL PRODUCTS</h1>
      <p className={style.description__centered}>
        Made of natural and organic ingredients
      </p>
      <ProductList
        filterFunction={product => typeof product.type === 'string'}
      />
    </Layout>
  )
}
