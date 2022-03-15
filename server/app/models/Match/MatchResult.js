import { Model } from '@orion-js/app'

const MatchResult = new Model({
  name: 'MatchResult',
  schema: {
    homeScore: {
      type: String
    },
    visitScore: {
      type: String
    },
  }
})

export default MatchResult

