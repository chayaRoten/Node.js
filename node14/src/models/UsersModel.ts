import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser {
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  token: String
}


const usersSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  token: String
})

const UsertModel: Model<IUser> = mongoose.model<IUser>('users', usersSchema);

export { UsertModel };
