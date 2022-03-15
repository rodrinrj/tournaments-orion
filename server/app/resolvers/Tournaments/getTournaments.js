import { resolver } from '@orion-js/app'
import Tournament from 'app/models/Tournament'
import Tournaments from 'app/collections/Tournaments'

const getTournaments = resolver({
  params: {},
  returns: [Tournament],
  mutation: false,
  async resolve(params, viewer) {
    return Tournaments.find({ deletedAt: null }).toArray()
  }
})

export default getTournaments

