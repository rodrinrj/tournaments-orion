import { Model } from '@orion-js/app'

const TeamInvitation = new Model({
  name: 'TeamInvitation',
  schema: () => require('./schema'),
  resolvers: () => require('./resolvers')
})

export default TeamInvitation

