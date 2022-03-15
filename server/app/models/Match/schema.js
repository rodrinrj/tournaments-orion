import dayjs from 'dayjs'
import MatchResult from './MatchResult'

const MatchSchema = {
  _id: {
    type: 'ID'
  },
  home: {
    type: 'ID'
  },
  visit: {
    type: 'ID'
  },
  date: {
    type: Date,
    optional: true
  },
  tournament: {
    type: 'ID',
    optional: true
  },
  result: {
    type: MatchResult,
    optional: true
  },
  createdAt: {
    type: Date,
    defaultValue: dayjs()
  },
  cancelledAt: {
    type: Date,
    optional: true
  }
}

export default MatchSchema

