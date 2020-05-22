/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const axios = require('axios')
// relies on this when building locally
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log('api endpoint: ' + process.env.GATSBY_BASE_URL)

const get = endpoint => axios.get(process.env.GATSBY_BASE_URL + endpoint)

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
  const allProduct = await get('products/')
  console.log('fetched products from remote server: ' + process.env.GATSBY_BASE_URL)
  allProduct.data.data.forEach(product => {
    createPage({
      path: `/product/${product._id}/`,
      component: require.resolve('./src/templates/ProductTemplate.js'),
      context: { product },
    })
  })
}
