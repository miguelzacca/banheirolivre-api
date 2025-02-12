import { NextFunction, Request, Response } from 'express'

export type Controller = (req: Request, res: Response) => void

export type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => void
