import mongoose from 'mongoose'

const sla = ():void => {
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

export default sla
