import express from 'express'
import cors from 'cors'
import routes from './routes'
import dotenv from 'dotenv'
import database from './services/MongoService'

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
    this.express.use(database)
  }
}

export default new App().express

