import { resolver } from '@orion-js/app'

const userNameResolver = resolver({
  returns: String,
  async resolve(user, params, viewer) {
    if (!user.profile) return null
    if (!user.profile.firstname) return null
    return user.profile.firstname
  }
})

export default userNameResolver

