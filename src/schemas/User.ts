import { Schema, model, Document } from 'mongoose'
import uuid from 'uuid/dist/v4'

interface UserInterface extends Document {
  id?: string,
  name?: string
  age?: number,
  email?: string,
  password?: string
}

const UserSchema = new Schema({
  _id: {
    type: String,
    default: uuid()
  },
  name: String,
  age: Number,
  email: String,
  password: String
}, {
  timestamps: true
})

export default model<UserInterface>('User', UserSchema)
