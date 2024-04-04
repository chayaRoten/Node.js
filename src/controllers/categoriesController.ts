import { Request, Response } from 'express';
import {GetAllCategory, GetCategory , AddCategory,UpdateCategory ,DeleteCategory} from '../services/categories.service';

export const getAllCategory = async (req: Request, res: Response) => {
  const categories = await GetAllCategory();
  res.send(categories);
};

export const getCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const category = await GetCategory(Number(categoryId));
  res.send(category);
};

export const addCategory = async (req: Request, res: Response) => {
  const { name, id, products } = req.body;
  const categoryNew = await AddCategory(name, id, products);
  res.send(categoryNew);
};

export const updateCategory = async (req: Request, res: Response) => {
  const { name, id, products } = req.body;
  const categoryNew = await UpdateCategory(name, id, products);
  res.send(categoryNew);
};

export const deleteCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const category = await DeleteCategory(Number(categoryId));
  res.send(category);
};
