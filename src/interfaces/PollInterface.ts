import { Document } from 'mongoose'

export default interface PollInterface extends Document {
  id: string,
  title: string,
  topic?: string,
  choices: [{
    option: string,
    votes: number
  }]
}
