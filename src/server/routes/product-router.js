const express = require('express')

const productCtrl = require('../controllers/product-ctrl')

const router = express.Router()

router.post('/product', productCtrl.createProduct)
router.put('/product/:id', productCtrl.updateProduct)
router.delete('/product/:id', productCtrl.deleteProduct)
router.get('/product/:id', productCtrl.getProductById)
router.get('/products', productCtrl.getProducts)

module.exports = router
