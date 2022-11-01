import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import LogMiddleware from './middlewares/log.middleware'
import { Routes } from './routes/routes'
import Log from './utils/log'
import * as database from './utils/mongo.connector'

async function main() {
  const app = express()
  app.use(express.json())
  app.disable('x-powered-by')

  await database.run()

  app.use(LogMiddleware)
  app.use('/api', Routes)

  app.listen(process.env.PORT || 3000, () => {
    Log('server', `Running on port ${process.env.PORT || 3000}`)
  })
}

main();
