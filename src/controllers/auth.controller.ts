import { Request, Response } from 'express'
import * as authService from '../services/auth.service'
import { validationResult } from 'express-validator'

export const register = async (req: Request, res: Response) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  await authService.register(req.body);

  return res.status(200).send({
    message: 'User register successfully'
  })
}

export const login = async (req: Request, res: Response) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const foundUser = await authService.login(req.body.email, req.body.password);
    return res.status(200).send(foundUser);
  } catch (error) {
    return res.status(500).send(error);
  }
}