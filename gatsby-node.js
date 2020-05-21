/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const axios = require('axios')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const REACT_APP_API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT
console.log('api endpoint: ' + process.env.REACT_APP_API_ENDPOINT)

const get = endpoint => axios.get(REACT_APP_API_ENDPOINT + endpoint)

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: 'eval-source-map',
    resolve: {
      alias: {
        react: path.resolve('./node_modules/react'),
      },
    },
  })
}

exports.createPages = async ({ actions: { createPage } }) => {
  // `getProductData` is a function that fetches our data
  const allProduct = await get('products/')
  console.log('fetched products from remote server')
  allProduct.data.data.forEach(product => {
    createPage({
      path: `/products/${product._id}/`,
      component: require.resolve('./src/templates/ProductTemplate.js'),
      context: { product },
    })
  })
}
