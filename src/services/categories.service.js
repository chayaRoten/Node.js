const { CategorytModel } = require('../models/CategoryModel')

const getAllCategory = async () => {
  const products = await CategorytModel.find().exec()
  // eslint-disable-next-line prefer-const
  let arr = []
  products.forEach(element => {
    arr.push(element?.name)
  })
  return arr.toSorted()
}

const getCategory = async (categoryId) => {
  const products = await CategorytModel.find().exec()
  const category = products.find(c => c?.id === Number(categoryId))
  if (!category) {
    return 'category not found' + '  ' + category
  }
  return category
}

const addCategory = async (categoryName, categoryId, categoryProducts) => {
  await CategorytModel.insertMany({ id: categoryId, name: categoryName, products: categoryProducts })
  return 'Data Received!'
}

const updateCategory = async (categoryName, categoryId, categoryProducts) => {
  await CategorytModel.updateOne({ id: categoryId }, { name: categoryName, products: categoryProducts })
  return 'Data Update!!'
}

const deleteCategory = async (categoryId) => {
  await CategorytModel.deleteOne({ id: categoryId })
  return 'Data Delete!!'
}
module.exports = {
  getAllCategory,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory
}
