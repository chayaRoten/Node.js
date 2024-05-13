import { Request, Response, NextFunction } from 'express';

const checkMethod = function (req: any, res: Response, next: NextFunction): void {
  console.log('LOGGED:' + ' type= ' + req.method)
  if (req.method === 'POST' && ((!req.body.id || !req.body.name) && (!req.body.email || !req.body.password))) {
    console.log('POST method not allowed.')
    res.status(405).send('Method Not Allowed')
    return
  } else {
    next();
  }
}

export default checkMethod


