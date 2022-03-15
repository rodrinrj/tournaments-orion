import { resolver } from '@orion-js/app'

const userEmailResolver = resolver({
  returns: String,
  async resolve(user) {
    return user.emails[0].address
  }
})

export default userEmailResolver

