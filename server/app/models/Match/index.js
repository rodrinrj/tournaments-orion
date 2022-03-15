import { Model } from '@orion-js/app'

const Match = new Model({
  name: 'Match',
  schema: () => require('./schema'),
  resolvers: () => require('./resolvers')
})

export default Match

