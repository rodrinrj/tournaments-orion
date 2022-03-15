import { Model } from '@orion-js/app'

const UserEmail = new Model({
  name: 'UserEmail',
  schema: {
    address: {
      type: 'email'
    },
    verified: {
      type: Boolean,
      defaultValue: false
    }
  }
})

export default UserEmail

