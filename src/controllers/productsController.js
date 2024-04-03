const { Router } = require('express')
const app = Router()
const productsService = require('../services/products.servies')

app.get('/product/:productId', async (req, res) => {
  const { productId } = req.params
  const product = await productsService.getProduct(productId)
  res.send(product)
})

app.post('/product/:categoryId', async (req, res) => {
  const { categoryId } = req.params
  const { name, id } = req.body
  const productNew = await productsService.addProduct(categoryId, name, id)
  res.send(productNew)
})

app.put('/product/:productId', async (req, res) => {
  const { name, id } = req.body
  const productNew = await productsService.updateProduct(name, id)
  res.send(productNew)
})

app.delete('/product/:productId', async (req, res) => {
  const { productId } = req.params
  const product = await productsService.deleteProduct(productId)
  res.send(product)
})

module.exports = app
