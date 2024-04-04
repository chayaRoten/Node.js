import express from 'express';
import * as categoriesController from '../controllers/categoriesController';
const router = express.Router();

router.get('/categories', categoriesController.getAllCategory);
router.get('/categories/:categoryId', categoriesController.getCategory);
router.post('/categories', categoriesController.addCategory);
router.put('/categories/:categoryId', categoriesController.updateCategory);
router.delete('/categories/:categoryId', categoriesController.deleteCategory);

export default router;
