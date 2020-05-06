import React from 'react'
import ProductImage from './ProductImage'
import ZoomableMedia from './ZoomableMedia'
import Style from '../styles/product.module.scss'
import Link from 'gatsby'
import PropTypes from 'prop-types';

const Product = ({product}) => {
  console.log(product._id)
  return (
    <a className={Style.a} style={{margin:'0.6em'}} href={`/${product._id}`}>
      <ZoomableMedia filename={`products/${product._id}.webp`}/>
      <p className={Style.name}>{product.name}</p>
      <p className={Style.price}>{'$'+product.price}</p>
    </a>
  )
}

Product.propTypes = {
  product: PropTypes.object
};

export default Product;