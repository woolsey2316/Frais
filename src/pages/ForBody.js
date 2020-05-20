import React from 'react'
import Layout from '../component/layout'
import SEO from '../component/seo'
import style from '../styles/section.module.scss'
import ProductList from '../container/ProductList'

export default () => {
  return (
    <Layout>
      <SEO title="For Body" />
      <h1 className={style.heading__centered}>Probiotic Soaps</h1>
      <p className={style.description__centered}>
        All our soaps are handcrafted and alcohol free
      </p>
      <ProductList filterFunction={product => product.type === 'soap'} />
    </Layout>
  )
}
