import { NextFunction, Request, Response } from "express";
import Log from "../utils/log";

export default function LogMiddleware(req: Request, _: Response, next: NextFunction) {
  Log(req.method, `${req.url} (${req.ip})`, 'yellow')

  return next()
}