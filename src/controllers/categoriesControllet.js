const categoriesService = require('../services/categories.service')

const getAllCategory = async (req, res) => {
  const categories = await categoriesService.getAllCategory()
  res.send(categories)
}

const getCategory = async (req, res) => {
  const { categoryId } = req.params
  const category = await categoriesService.getCategory(categoryId)
  res.send(category)
}

const addCategory = async (req, res) => {
  const { name, id, products } = req.body
  const categoryNew = await categoriesService.addCategory(name, id, products)
  res.send(categoryNew)
}

const updateCategory = async (req, res) => {
  const { name, id, products } = req.body
  const categoryNew = await categoriesService.updateCategory(name, id, products)
  res.send(categoryNew)
}

const deleteCategory = async (req, res) => {
  const { categoryId } = req.params
  const category = await categoriesService.deleteCategory(categoryId)
  res.send(category)
}

module.exports = {
  getAllCategory,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory
}
