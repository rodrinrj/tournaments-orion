import { resolver } from '@orion-js/app'
import Team from 'app/models/Team'
import Teams from 'app/collections/Teams'

const getTeamQuery = resolver({
  params: {
    teamId: {
      type: 'ID'
    }
  },
  returns: Team,
  mutation: false,
  async resolve({ teamId }, viewer) {
    return await Teams.findOne(teamId)
  }
})

export default getTeamQuery

