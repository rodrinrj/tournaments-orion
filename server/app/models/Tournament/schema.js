import dayjs from "dayjs"

const TournamentSchema = {
  _id: {
    type: 'ID'
  },
  name: {
    type: String
  },
  teams: {
    type: ['ID']
  },
  matches: {
    type: ['ID']
  },
  createdAt: {
    type: Date,
    defaultValue: dayjs().toDate()
  },
  deletedAt: {
    type: Date,
    optional: true
  }
}

export default TournamentSchema

