import mongoose from 'mongoose';

export interface IProduct {
  name: string;
  description: string;
  price: string;
  userId: string;
  imageLinks: Array<string>;
  category: string;
}

export interface ICategory {
  name: string;
  userId: string;
}

export interface IUser {
  _id: mongoose.Types.ObjectId | null;
  name: string;
  image: string;
  emailVerified: string | null;
  email: string;
}
