import { Collection } from '@orion-js/app'
import User from 'app/models/User'

const UsersCollection = new Collection({
  name: 'users',
  model: User,
  indexes: [{keys: {'emails.address': 1}, options: {unique: true}}]
})

export default UsersCollection

