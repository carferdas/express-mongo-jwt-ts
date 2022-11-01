import express from 'express';
import * as authController from '../controllers/auth.controller';
import { body } from 'express-validator';

export const AuthRoutes = express.Router();

AuthRoutes.post(
  '/login',
  body('email').isEmail(),
  body('password').isString(),
  authController.login
)

AuthRoutes.post(
  '/register',
  body('name').isString(),
  body('email').isEmail(),
  body('password').isString(),
  body('avatar').optional().isString(),
  authController.register
)
