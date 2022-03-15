import { resolver } from '@orion-js/app'
import Match from 'app/models/Match'
import Matches from 'app/collections/Matches'

const createMatchMutation = resolver({
  params: Match.clone({
    pickFields: ['home', 'visit', 'date', 'tournaments']
  }),
  returns: Match,
  mutation: true,
  async resolve(match, viewer) {
    match._id = await Matches.insertOne(match)
    return match
  }
})

export default createMatchMutation

