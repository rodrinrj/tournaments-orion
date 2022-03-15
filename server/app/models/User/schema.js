import UserProfile from './UserProfile'
import UserEmail from './UserEmail'
import dayjs from 'dayjs'

export default {
  _id: {
    type: 'ID'
  },
  emails: {
    type: [UserEmail],
  },
  services: {
    type: 'blackbox',
    private: true
  },
  profile: {
    type: UserProfile,
    label: 'Profile',
  },
  roles: {
    type: ['ID'],
    optional: true
  },
  stripeCustomerId: {
    type: String,
    optional: true,
    private: true
  },
  createdAt: {
    type: Date,
    defaultValue: dayjs()
  },
  deletedAt: {
    type: Date,
    optional: true
  }
}

