import { Schema, model, Document } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

interface PollInterface extends Document {
  id: string,
  title: string,
  topic?: string,
  choices: [{
    option: string,
    votes: number
  }]
}

const PollSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4()
  },
  title: String,
  topic: String,
  choices: [{
    option: String,
    votes: Number
  }]
}, {
  timestamps: true
})

export default model<PollInterface>('Poll', PollSchema)
