import mongoose from 'mongoose'
import Log from './log';

export async function run() {
  Log('mongodb', 'Trying to connect')

  return await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
    .then(() => {
      Log('mongodb', 'Successfully connected', 'green')
    })
    .catch(_ => {
      Log('mongodb', "Can't connect to database", 'red')
      process.exit()
    })
}

export async function disconnect() {
  mongoose.disconnect().then(() => {
    Log('mongodb', 'Disconnected')
  })
}