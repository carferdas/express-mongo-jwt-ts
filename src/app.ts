import dotenv from 'dotenv'
dotenv.config()
import express, { Application } from 'express'
import LogMiddleware from './middlewares/log.middleware'
import { Routes } from './routes/routes'
import * as database from './utils/mongo.connector'

const app: Application = express()
app.use(express.json())
app.disable('x-powered-by')

database.run()

app.use(LogMiddleware)
app.use('/api', Routes)

export default app