import express from 'express'
import cors from 'cors'
import routes from './routes'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

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

  private routes ():void {
    this.express.use(routes)
  }

  private database ():void {
    const HOST = process.env.MONGO_HOST

    const USER = process.env.MONGO_USER
    const PASSWORD = process.env.MONGO_PASSWORD
    const DATABASE = process.env.MONGO_DATABASE

    const PORT = process.env.MONGO_PORT
    const uri = `mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }

    mongoose.connect(uri, options)
  }
}

export default new App().express

