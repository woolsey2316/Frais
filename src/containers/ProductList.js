import React, { Component } from 'react'
import api from '../api/api'

import Product from '../components/Product'

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
          return null;
        }

        if (!products.length) {
          console.log('products is empty')
          return null;
        }
        console.log('TCL: ProductsList -> render -> products', products)
        
        return (
          <div style={{display:'flex', justifyContent:'center', flexWrap: 'wrap'}}>
            {
              products.filter(this.props.filterFunction).map(product => {
                return (
                  <Product product={product}/>
                )
              })
            }
          </div>
        )
    }
}

export default ProductList