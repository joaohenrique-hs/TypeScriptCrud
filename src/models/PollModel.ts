import { Schema, model } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'
import PollInterface from '../interfaces/PollINterface'

const PollSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4
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
