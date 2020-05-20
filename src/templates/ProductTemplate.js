import React from 'react'
import ProductImage from '../component/ProductImage'
import Style from '../styles/product.module.scss'
import Layout from '../component/layout'
import DropDownText from '../component/DropDownText'

export default ({pageContext}) => {
  return (
    <Layout>
      <div style={{display:'flex', justifyContent:'center',margin:'0em 25em'}}>
        <div >
          <ProductImage filename={`products/${pageContext.product._id}.webp`}/>
          <p className={Style.description} style={{float:'right'}}>I'm a product description. This is a great place to "sell" your product 
          and grab buyers' attention. Describe your product clearly and concisely. 
          Use unique keywords. Write your own description instead of using manufacturers' 
          copy.</p>
        </div>
        <div style={{padding:'0em 3em', minWidth:"60%" }}>
          <p className={Style.name}>{pageContext.product.name}</p>
          <p className={Style.price}>{'$' + pageContext.product.price}</p>
          <p className={Style.subheading}>Quantity</p>
          <input className={Style.input} type="number" value="1"></input>
          <button className={Style.button}>ADD TO CART</button>
          <DropDownText title="PRODUCT INFO" 
            text="I'm a product detail. I'm a great place to add more information about your product 
            such as sizing, material, care and cleaning instructions. This is also a great space to 
            write what makes this product special and how your customers can benefit from this item."/>
          <DropDownText title="RETURN & REFUND POLICY" 
            text="I’m a Return and Refund policy. I’m a 
            great place to let your customers know what to do in case they are dissatisfied with their 
            purchase. Having a straightforward refund or exchange policy is a great way to build trust 
            and reassure your customers that they can buy with confidence."/>
          <DropDownText title="SHIPPING INFO" 
            text="I'm a shipping policy. I'm a great place to add more 
            information about your shipping methods, packaging and cost. Providing straightforward 
            information about your shipping policy is a great way to build trust and reassure your 
            customers that they can buy from you with confidence."/>
        </div>
      </div>
    </Layout>
  )
}