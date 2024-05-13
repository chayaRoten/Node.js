import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct {
  id: number;
  name: string;
}

export interface ICategory extends Document {
  id: number;
  name: string;
  products: IProduct[];
}

const categorySchema: Schema = new Schema({
  id: Number,
  name: String,
  products: [{
    id: Number,
    name: String
  }]
});

const CategoryModel: Model<ICategory> = mongoose.model<ICategory>('products', categorySchema);

export { CategoryModel };
