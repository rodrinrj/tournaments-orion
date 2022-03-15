import { resolver } from '@orion-js/app'
import Tournament from 'app/models/Tournament'
import Tournaments from 'app/collections/Tournaments'

const createTournamentMutation = resolver({
  params: Tournament.clone({
    pickFields: ['name']
  }),
  returns: Tournament,
  mutation: true,
  async resolve(tournament, viewer) {
    tournament._id = await Tournaments.insertOne(tournament)
    return tournament
  }
})

export default createTournamentMutation

