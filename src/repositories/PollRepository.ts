import PollModel from '../models/PollModel'
import PollInterface from '../interfaces/PollInterface'

class PollRepository {
  public async create (pollData:PollInterface): Promise<PollInterface> {
    const poll = await PollModel.create(pollData)

    return poll
  }
}

export default PollRepository
