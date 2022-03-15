import { resolver } from '@orion-js/app'
import Tournament from 'app/models/Tournament'
import Tournaments from 'app/collections/Tournaments'

const updateTournamentMutation = resolver({
  params: {
    tournamentId: {
      type: 'ID'
    },
    tournament: {
      type: Tournament.clone({
        name: 'UpdateTournament',
        pickFields: ['name', 'teams', 'matches']
      })
    }
  },
  returns: Tournament,
  mutation: true,
  async resolve({ tournamentId, tournament: tournamentData }, viewer) {
    const tournament = await Tournaments.findOne(tournamentId)
    await tournament.update({ $set: tournamentData })

    return tournament
  }
})

export default updateTournamentMutation

