import { resolver } from '@orion-js/app'
import Matches from 'app/collections/Matches'
import dayjs from 'dayjs'

const cancelMatchMutation = resolver({
  params: {
    matchId: {
      type: 'ID'
    }
  },
  returns: Boolean,
  mutation: true,
  async resolve({ matchId }, viewer) {
    await Matches.updateOne(matchId, {
      $set: { cancelledAt: dayjs().toDate() }
    })

    return true
  }
})

export default cancelMatchMutation

