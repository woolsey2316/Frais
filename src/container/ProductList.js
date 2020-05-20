import React, { Component } from 'react'
import api from '../api/api'

import Product from '../component/Product'

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      isLoading: false,
    }
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true })

    await api.getAllProducts().then(products => {
      console.log('data retrieved : ' + products.data.data)
      this.setState({
        products: products.data.data,
        isLoading: false,
      })
    })
  }

  render() {
    const { products, isLoading } = this.state
    console.log('rendering triggered')
    if (isLoading) {
      console.log('products variable is still loading')
      return null
    }

    if (!products.length) {
      console.log('products is empty')
      return null
    }
    console.log('TCL: ProductsList -> render -> products', products)

    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        {products
          .filter(this.props.filterFunction)
          .sort((a, b) => {
            return a.type < b.type ? 1 : -1
          })
          .map(product => {
            return <Product key={product._id} product={product} />
          })}
      </div>
    )
  }
}

export default ProductList
