import { resolver } from '@orion-js/app'
import User from 'app/models/User'
import Users from 'app/collections/Users'
import UserProfile from 'app/models/User/UserProfile'

const setUserProfileMutation = resolver({
  params: {
    userId: {
      type: 'ID'
    },
    profile: {
      type: UserProfile
    }
  },
  returns: User,
  requireUserId: true,
  mutation: true,
  checkPermission({ userId }, viewer) {
    if (userId !== viewer.userId) {
      return 'userNotAllowed'
    }
  },
  async resolve({ userId, profile }, viewer) {
    await Users.update(userId, {
      $set: { profile }
    })
    return await Users.findOne(userId)
  }
})

export default setUserProfileMutation

