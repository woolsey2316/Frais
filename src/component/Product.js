import React from 'react'
import ZoomableMedia from './ZoomableMedia'
import Style from '../styles/product.module.scss'
import PropTypes from 'prop-types'

const Product = ({ product }) => {
  //console.log("product id: " + product._id)
  return (
    <a className={Style.a} style={{ margin: '0.6em' }} href={`/${product._id}`}>
      <ZoomableMedia style={Style.zoomableMedia} filename={`products/${product._id}.webp`} />
      <p className={Style.name}>{product.name}</p>
      <p className={Style.price}>{'$' + product.price}</p>
    </a>
  )
}

Product.propTypes = {
  product: PropTypes.object,
}

export default Product
