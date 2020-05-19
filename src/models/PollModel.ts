import { Schema, model, Document } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

interface PollInterface extends Document {
  id: string,
  title: string,
  opt1: string,
  votes1: number,
  opt2: string,
  votes2: string
}

const PollSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4()
  },
  title: String,
  opt1: String,
  votes1: Number,
  opt2: String,
  votes2: Number
}, {
  timestamps: true
})

export default model<PollInterface>('Poll', PollSchema)
