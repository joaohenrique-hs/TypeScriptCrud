import { Schema, model } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

const PollSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4()
  },
  opt1: String,
  votes1: Number,
  opt2: String,
  votes2: Number
}, {
  timestamps: true
})

export default model('Poll', PollSchema)
