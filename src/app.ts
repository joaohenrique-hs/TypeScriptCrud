import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'
import dotenv from 'dotenv'

dotenv.config()

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
    this.database()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database ():void {
    const HOST = process.env.MONGO_HOST
    const PORT = process.env.MONGO_PORT

    const USER = process.env.MONGO_USER
    const PASSWORD = process.env.MONGO_PASSWORD
    const DATABASE = process.env.MONGO_DATABASE

    mongoose.connect(`mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  private routes ():void {
    this.express.use(routes)
  }
}

export default new App().express

