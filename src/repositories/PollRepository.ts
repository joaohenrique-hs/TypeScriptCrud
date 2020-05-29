import PollModel from '../models/PollModel'

class PollRepository {
  public async create (pollData) {
    const poll = await PollModel.create(pollData)

    return poll
  }
}

export default PollRepository
