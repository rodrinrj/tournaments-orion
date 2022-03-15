import dayjs from "dayjs"

export default {
  _id: {
    type: 'ID'
  },
  name: {
    type: String,
  },
  tag: {
    type: String,
    optional: true
  },
  managers: {
    type: ['ID'],
    validate(input) {
      if (input.length > 0) return
      return 'cannotBeEmpty'
    }
  },
  members: {
    type: ['ID'],
    optional: true
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

