const express = require('express')
const productsController = require('../controllers/productsController')
const router = express.Router()

router.get('/product/:productId', productsController.getProduct)
router.post('/product/:categoryId', productsController.addProduct)
router.put('/product/:productId', productsController.updateProduct)
router.delete('/product/:productId', productsController.deleteProduct)

module.exports = router
