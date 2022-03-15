import { resolver } from '@orion-js/app'
import Team from 'app/models/Team'
import Teams from 'app/collections/Teams'

const createTeamMutation = resolver({
  params: Team.clone({
    pickFields: ['name', 'tag', 'managers']
  }),
  returns: Team,
  mutation: true,
  async resolve(team, viewer) {
    team.members = [...team.managers]
    team._id = await Teams.insertOne(team)
    return team
  }
})

export default createTeamMutation

