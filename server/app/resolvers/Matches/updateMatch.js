import { resolver } from '@orion-js/app'
import Match from 'app/models/Match'
import Matches from 'app/collections/Matches'

const updateMatchMutation = resolver({
  params: {
    matchId: {
      type: 'ID'
    },
    match: {
      type: Match.clone({
        name: 'UpdateMatch',
        pickFields: ['date', 'tournament', 'result']
      })
    }
  },
  returns: Match,
  mutation: true,
  async resolve({ matchId, match: matchData }, viewer) {
    const match = await Matches.findOne(matchId)
    await match.update({$set: matchData})

    return match
  }
})

export default updateMatchMutation

