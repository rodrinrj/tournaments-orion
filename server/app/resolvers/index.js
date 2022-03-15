import {resolversSchemas} from '@orion-js/graphql'
import Auth from './Auth'
import Users from './Users'
import Matches from './Matches'
import Teams from './Teams'
import TeamInvitations from './TeamInvitations'
import Tournaments from './Tournaments'

export default {
  ...resolversSchemas,
  ...Auth,
  ...Users,
  ...Matches,
  ...Teams,
  ...TeamInvitations,
  ...Tournaments
}

