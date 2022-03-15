import dayjs from "dayjs"

const TeamInvitationSchema = {
  _id: {
    type: 'ID'
  },
  teamId: {
    type: 'ID'
  },
  memberId: {
    type: 'ID'
  },
  expireDate: {
    type: Date,
    defaultValue: dayjs().add(5, 'day').toDate()
  },
  accepted: {
    type: Boolean,
    defaultValue: false
  },
  createdAt: {
    type: Date,
    defaultValue: dayjs().toDate()
  }
}

export default TeamInvitationSchema

