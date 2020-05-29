import { Schema, model } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'
import UserInterface from '../interfaces/UserInterface'

const UserSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4
  },
  name: String,
  email: String,
  password: String
}, {
  timestamps: true
})

export default model<UserInterface>('User', UserSchema)
