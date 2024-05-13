import { Request, Response } from 'express';
import * as productsService from '../services/products.servies';

export const getProduct = async (req: Request, res: Response): Promise<void> => {
  const { productId } = req.params;
  const product = await productsService.getProduct(Number(productId));
  res.send(product);
};

export const addProduct = async (req: Request, res: Response): Promise<void> => {
  const { categoryId } = req.params;
  const { name, id } = req.body;
  const productNew = await productsService.addProduct(Number(categoryId), name, id);
  res.send(productNew);
};

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  const { name, id } = req.body;
  const productNew = await productsService.updateProduct(name, id);
  res.send(productNew);
};

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  const { productId } = req.params;
  const product = await productsService.deleteProduct(Number(productId));
  res.send(product);
};
