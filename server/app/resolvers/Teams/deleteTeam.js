import { resolver } from '@orion-js/app'
import Teams from 'app/collections/Teams'
import dayjs from 'dayjs'

const deleteTeamMutation = resolver({
  params: {
    teamId: {
      type: 'ID'
    }
  },
  returns: Boolean,
  mutation: true,
  async resolve({ teamId }, viewer) {
    await Teams.updateOne(teamId, {
      $set: { deletedAt: dayjs().toDate() }
    })

    return true
  }
})

export default deleteTeamMutation

