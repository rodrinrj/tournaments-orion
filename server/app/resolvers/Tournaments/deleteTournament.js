import { resolver } from '@orion-js/app'
import Tournaments from 'app/collections/Tournaments'
import dayjs from 'dayjs'

const deleteTournamentMutation = resolver({
  params: {
    tournamentId: {
      type: 'ID'
    }
  },
  returns: Boolean,
  mutation: true,
  async resolve({ tournamentId }, viewer) {
    await Tournaments.updateOne(tournamentId, {
      $set: { deletedAt: dayjs().toDate() }
    })

    return true
  }
})

export default deleteTournamentMutation

