import { Router } from 'express'
import { AuthRoutes } from './auth.route';

export const Routes = Router();

Routes.use('/', AuthRoutes)