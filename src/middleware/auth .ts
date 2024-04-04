import { Request, Response, NextFunction } from 'express';
import jwt, { VerifyErrors, Secret } from 'jsonwebtoken';

const config = process.env;

const verifyToken = (req: any, res: Response, next: NextFunction): void => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (!token) {
     res.status(403).send('A token is required for authentication');
     return
  }

  try {
    const decoded = jwt.verify(token as string, config.TOKEN_KEY as Secret);
    req.user = decoded;
  } catch (err) {
    res.status(401).send('Invalid Token');
    return
  }

  return next();
};

export default verifyToken;
