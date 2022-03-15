import { resolver } from '@orion-js/app'
import Team from 'app/models/Team'
import Teams from 'app/collections/Teams'

const getTeams = resolver({
  params: {},
  returns: [Team],
  mutation: false,
  async resolve(params, viewer) {
    return Teams.find({ deletedAt: null }).toArray()
  }
})

export default getTeams

