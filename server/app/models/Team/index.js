import { Model } from '@orion-js/app'

const Team = new Model({
  name: 'Team',
  schema: () => require('./schema'),
  resolvers: () => require('./resolvers')
})

export default Team

