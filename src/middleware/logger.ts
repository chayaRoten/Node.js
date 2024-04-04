import { Request, Response, NextFunction } from 'express';
const myLogger = function (req: any, res: Response, next: NextFunction): void {
  console.log('LOGGED:' + 'time: ' + Date.now() + ' url: ' + req.url)
  next()
}

export default myLogger
