import { CategoryModel } from '../models/CategoryModel';

export const GetAllCategory = async (): Promise<string[]> => {
  const products = await CategoryModel.find().exec();
  let arr: string[] = [];
  products.forEach(element => {
    arr.push(element?.name);
  });
  return arr.sort();
};

export const GetCategory = async (categoryId: number): Promise<string | any> => {
  const products = await CategoryModel.find().exec();
  const category = products.find(c => c?.id === categoryId);
  if (!category) {
    return 'Category not found';
  }
  return category;
};

export const AddCategory = async (categoryName: string, categoryId: number, categoryProducts: any[]): Promise<string> => {
  await CategoryModel.insertMany({ id: categoryId, name: categoryName, products: categoryProducts });
  return 'Data Received!';
};

export const UpdateCategory = async (categoryName: string, categoryId: number, categoryProducts: any[]): Promise<string> => {
  await CategoryModel.updateOne({ id: categoryId }, { name: categoryName, products: categoryProducts });
  return 'Data Updated!';
};

export const DeleteCategory = async (categoryId: number): Promise<string> => {
  await CategoryModel.deleteOne({ id: categoryId });
  return 'Data Deleted!';
};
