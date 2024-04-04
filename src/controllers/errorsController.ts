import { Request, Response } from 'express';

export const othetAddress = (req: Request, res: Response): void => {
  res.status(404).send('You have a mistake in the address');
};

export default {
  othetAddress
};
