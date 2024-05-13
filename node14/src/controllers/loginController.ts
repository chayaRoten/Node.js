import { Request, Response } from 'express';
import { login, register } from '../services/login.service';
import dotenv from 'dotenv';
dotenv.config();

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const result = await login(email, password);
  res.send(result);
};

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const { first_name, last_name, email, password } = req.body;
  const result = await register(first_name, last_name, email, password);
  res.send(result);
};
