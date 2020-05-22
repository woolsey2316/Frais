import React, { Component } from 'react'
import apis from '../api/api'

import Product from '../component/Product'

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      isLoading: true,
    }
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true })

    await apis.getAllProducts().then(products => {
      console.log('data fetched from server ? ' + products.data.success)
      console.log('endpoint url: ' + process.env.GATSBY_BASE_URL)
      console.log('base url: ' + process.env.BASE_URL)
      console.log('env : ' + process.env.NODE_ENV)
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
      console.log('aysnc function still retrieving data')
      return null
    }

    if (!products.length) {
      console.log('a render was called before data had been fetched, cancelling rendering')
      return null
    }

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
