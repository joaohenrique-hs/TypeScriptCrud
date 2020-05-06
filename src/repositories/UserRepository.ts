import UserModel from '../models/UserModel'

class UserRepository {
  public async create (userData) {
    const userExists = UserModel.exists({ email: userData.email })

    if (userExists) {
      throw new Error('ERR_DUPLICATED_EMAIL')
    }

    const user = await UserModel.create(userData)

    return user
  }
}

export default UserRepository
