import { Model } from '@orion-js/app'

const Tournament = new Model({
  name: 'Tournament',
  schema: () => require('./schema'),
  resolvers: () => require('./resolvers')
})

export default Tournament

