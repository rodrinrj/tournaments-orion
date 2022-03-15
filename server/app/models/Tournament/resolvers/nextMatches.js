import { resolver } from '@orion-js/app'

const nextMatchesResolver = resolver({
  returns: ['ID'],
  async resolve(tournament) {
    return ['1', '2', '3', '4', '5']
  }
})

export default nextMatchesResolver

