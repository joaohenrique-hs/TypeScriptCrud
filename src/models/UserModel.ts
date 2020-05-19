import { Schema, model, Document } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

interface UserInterface extends Document {
  id?: string,
  name?: string
  email?: string,
  password?: string
}

const UserSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4()
  },
  name: String,
  email: String,
  password: String
}, {
  timestamps: true
})

export default model<UserInterface>('User', UserSchema)
