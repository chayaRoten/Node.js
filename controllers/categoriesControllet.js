const { Router } = require('express');
const app = Router();
const categoriesService = require('../services/categories.service');

app.get('/categories', async (req, res) => {
    const categories = await categoriesService.getAllCategory();
    res.send(categories)
})

app.get('/categories/:categoryId', async (req, res) => {
    const { categoryId } = req.params;
    const category = await categoriesService.getCategory(categoryId);
    res.send(category)
})


app.post('/categories', async (req, res) => {
    const { name, id, products } = req.body;
    const categoryNew = await categoriesService.addCategory(name, id, products);
    res.send(categoryNew)
})

app.put('/categories/:categoryId', async (req, res) => {
    const { name, id, products } = req.body;
    const categoryNew = await categoriesService.updateCategory(name, id, products);
    res.send(categoryNew)
})


app.delete('/categories/:categoryId', async (req, res) => {
    const { categoryId } = req.params;
    const category = await categoriesService.deleteCategory(categoryId);
    res.send(category)
})


module.exports = app;