import React from 'react'
import ProductImage from './ProductImage'

export default ({product}) => {
  return (
    <div style={{margin:'2em'}}>
      <ProductImage filename={`products/${product._id}.webp`}/>
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  )
}