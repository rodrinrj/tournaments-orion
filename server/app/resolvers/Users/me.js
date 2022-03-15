import { resolver } from '@orion-js/app'
import User from 'app/models/User'
import Users from 'app/collections/Users'

export default resolver({
  params: {},
  returns: User,
  mutation: false,
  async resolve(params, viewer) {
    return await Users.findOne(viewer.userId)
  }
})
