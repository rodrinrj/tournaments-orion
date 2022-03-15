import { resolver } from '@orion-js/app'
import Team from 'app/models/Team'
import Teams from 'app/collections/Teams'
import Users from 'app/collections/Users'

const addTeamMemberMutation = resolver({
  params: {
    teamId: {
      type: 'ID'
    },
    memberId: {
      type: 'ID'
    }
  },
  returns: Team,
  mutation: true,
  async resolve({ teamId, memberId }, viewer) {
    const team = Teams.findOne(teamId)
    const member = Users.findOne(memberId)
    await team.update({$addToSet: { members: member._id }})
    return team
  }
})

export default addTeamMemberMutation

