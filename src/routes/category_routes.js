const express = require('express')
const categoriesControllet = require('../controllers/categoriesControllet')
const router = express.Router()

router.get('/categories', categoriesControllet.getAllCategory)
router.get('/categories/:categoryId', categoriesControllet.getCategory)
router.post('/categories', categoriesControllet.addCategory)
router.put('/categories/:categoryId', categoriesControllet.updateCategory)
router.delete('/categories/:categoryId', categoriesControllet.deleteCategory)

module.exports = router
