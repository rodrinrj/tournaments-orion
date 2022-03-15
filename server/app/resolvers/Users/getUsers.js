import { resolver } from '@orion-js/app'
import User from 'app/models/User'
import Users from 'app/collections/Users'

const getUsersQuery = resolver({
  params: {},
  returns: [User],
  mutation: false,
  async resolve(params, viewer) {
    return Users.find({ deletedAt: null }).toArray()
  }
})

export default getUsersQuery

