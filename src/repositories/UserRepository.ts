import UserModel from '../models/UserModel'
import UserInterface from '../interfaces/UserInterface'

class UserRepository {
  public async create (userData:UserInterface): Promise<UserInterface> {
    const userExists = UserModel.exists({ email: userData.email })

    if (userExists) {
      throw new Error('ERR_DUPLICATED_EMAIL')
    }

    const user = await UserModel.create(userData)

    return user
  }
}

export default UserRepository
