import { Document } from 'mongoose'

export default interface UserInterface extends Document {
  id?: string,
  name?: string
  email?: string,
  password?: string
}
