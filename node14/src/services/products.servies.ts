import { CategoryModel } from '../models/CategoryModel';

export const getProduct = async (productId: number): Promise<string | any> => {
  const products = await CategoryModel.find().exec();
  const thisCategory = products.find(c => c?.products.find(x => x?.id === productId));
  const product = thisCategory?.products.find(c => c?.id === productId);
  if (!product) {
    return `Product not found: ${productId}`;
  }
  return product;
};

export const addProduct = async (categoryId: number, productName: string, productId: number): Promise<string> => {
  const products = await CategoryModel.find().exec();
  const thisCategory = products.find(c => c?.id === categoryId);
  thisCategory?.products.push({ name: productName, id: productId });
  await CategoryModel.updateOne({ id: categoryId }, { products: thisCategory?.products });
  return 'Data Received!';
};

export const updateProduct = async (productName: string, productId: number): Promise<string> => {
  const products = await CategoryModel.find().exec();
  const thisCategory = products.find(c => c?.products.find(x => x?.id === productId));
  thisCategory?.products.forEach(p => {
    if (p.id == productId) {
      p.id = productId;
      p.name = productName;
    }
  });
  await CategoryModel.updateOne({ id: thisCategory?.id }, { products: thisCategory?.products });
  return 'Data Updated!';
};

export const deleteProduct = async (productId: number): Promise<string> => {
  const products = await CategoryModel.find().exec();
  const thisCategory = products.find(c => c?.products.find(x => x?.id === productId));
  const index = thisCategory?.products.findIndex(p => p.id == productId);
  thisCategory?.products.splice(index ?? 0, 1);
  await CategoryModel.updateOne({ id: thisCategory?.id }, { products: thisCategory?.products });
  return 'Data Deleted!';
};
