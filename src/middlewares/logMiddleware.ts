import { Request, Response, NextFunction } from 'express';

export function logMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.log(`${req.method} ${req.path}`);
  next();
}
