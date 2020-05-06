/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const axios = require('axios');

const get = endpoint => axios.get(`http://localhost:3000/api/${endpoint}`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: "eval-source-map",
    resolve: {
      alias: {
        "react": path.resolve('./node_modules/react')
      }
    }
  })
}

exports.createPages = async ({ actions: { createPage } }) => {
  // `getProductData` is a function that fetches our data
  const allProduct = await get("products/");
  console.log("returned products :" + allProduct);
  allProduct.data.data.forEach(product => {
    createPage({
      path: `/${product._id}/`,
      component: require.resolve("./src/templates/ProductTemplate.js"),
      context: { product },
    })
  })
}