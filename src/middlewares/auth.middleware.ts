import { NextFunction, Request, Response } from "express"
import { JwtPayload } from "jsonwebtoken"
import * as jwt from 'jsonwebtoken'

export interface CustomRequest extends Request {
  token: string | JwtPayload
}

export const AuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '')

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, String(process.env.SECRET_KEY));
    (req as CustomRequest).token = decoded

    next()
  } catch (_) {
    res.json({
      message: 'Unauthenticated.'
    })
  }
}