import { resolver } from '@orion-js/app'

const activeTournamentsResolver = resolver({
  returns: ['ID'],
  async resolve(team) {
    return ['1', '2', '3', '4', '5']
  }
})

export default activeTournamentsResolver

