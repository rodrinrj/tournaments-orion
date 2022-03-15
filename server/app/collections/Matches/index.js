import { Collection } from '@orion-js/app'
import Match from 'app/models/Match'

const MatchesCollection = new Collection({
  name: 'matches',
  model: Match,
  indexes: []
})

export default MatchesCollection

