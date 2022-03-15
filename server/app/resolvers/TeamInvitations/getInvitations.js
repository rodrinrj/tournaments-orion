import { resolver } from '@orion-js/app'
import TeamInvitation from 'app/models/TeamInvitation'
import TeamInvitations from 'app/collections/TeamInvitations'

const getInvitationsQuery = resolver({
  params: {},
  returns: [TeamInvitation],
  mutation: false,
  async resolve(params, viewer) {
    return TeamInvitations.find({}).toArray()
  }
})

export default getInvitationsQuery

