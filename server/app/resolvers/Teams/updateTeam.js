import { resolver } from '@orion-js/app'
import Team from 'app/models/Team'
import Teams from 'app/collections/Teams'

const updateTeamMutation = resolver({
  params: {
    teamId: {
      type: 'ID'
    },
    team: {
      type: Team.clone({
        name: 'UpdateTeam',
        pickFields: ['name', 'tag', 'managers']
      })
    }
  },
  returns: Team,
  mutation: true,
  async resolve({ teamId, team: teamData }, viewer) {
    const team = await Teams.findOne(teamId)
    await team.update({ $set: teamData })

    return team
  }
})

export default updateTeamMutation

