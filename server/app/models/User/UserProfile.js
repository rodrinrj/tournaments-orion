import { Model, resolver } from '@orion-js/app'

const UserProfile = new Model({
  name: 'UserProfile',
  schema: {
    firstname: {
      type: String,
      min: 2,
      label: 'First name'
    },
    lastname: {
      type: String,
      min: 2,
      label: 'Last name'
    }
  },
  resolvers: {
    name: resolver({
      name: 'fullname',
      returns: String,
      resolve: async function(profile) {
        return `${profile.firstname} + ${profile.lastname}`
      }
    })
  }
})

export default UserProfile

