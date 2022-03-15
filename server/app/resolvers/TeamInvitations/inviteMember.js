import { resolver } from '@orion-js/app'
import TeamInvitation from 'app/models/TeamInvitation'
import TeamInvitations from 'app/collections/TeamInvitations'
import notifyNextMatches from 'app/jobs/notifyNextMatches'

const inviteMemberMutation = resolver({
  params: TeamInvitation.clone({
    pickFields: ['memberId', 'teamId']
  }),
  returns: TeamInvitation,
  mutation: true,
  async resolve(invitation, viewer) {
    invitation._id = await TeamInvitations.insertOne(invitation)

    notifyNextMatches({ invitation }, 
      { waitToRun: 10 * 1000 }
    )

    return TeamInvitations.findOne(invitation._id)
  }
})

export default inviteMemberMutation

