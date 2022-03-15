import { Collection } from '@orion-js/app'
import TeamInvitation from 'app/models/TeamInvitation'

const TeamInvitationsCollection = new Collection({
  name: 'teamInvitations',
  model: TeamInvitation,
  indexes: [],
})

export default TeamInvitationsCollection

