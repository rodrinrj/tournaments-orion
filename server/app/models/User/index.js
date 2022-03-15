import { Model } from '@orion-js/app'

const User = new Model({
  name: 'User',
  schema: () => require('./schema'),
  resolvers: () => require('./resolvers')
})

export default User

