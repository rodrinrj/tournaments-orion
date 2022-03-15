import { resolver } from '@orion-js/app'
import Tournament from 'app/models/Tournament'
import Tournaments from 'app/collections/Tournaments'

const signupTeamMutation = resolver({
  params: {
    tournamentId: {
      type: 'ID'
    },
    teamId: {
      type: 'ID'
    }
  },
  returns: Tournament,
  mutation: true,
  async resolve({ tournamentId, teamId }, viewer) {
    await Tournaments.update(tournamentId, {
      $addToSet: { teams: teamId }
    })
    return Tournaments.findOne(tournamentId)
  }
})

export default signupTeamMutation

