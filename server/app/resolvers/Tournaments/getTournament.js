import { resolver } from '@orion-js/app'
import Tournament from 'app/models/Tournament'
import Tournaments from 'app/collections/Tournaments'

const getTournamentQuery = resolver({
  params: {
    tournamentId: {
      type: 'ID'
    }
  },
  returns: Tournament,
  mutation: false,
  async resolve({ tournamentId }, viewer) {
    return await Tournaments.findOne(tournamentId)
  }
})

export default getTournamentQuery

