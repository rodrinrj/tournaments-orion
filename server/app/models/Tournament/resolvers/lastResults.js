import { resolver } from '@orion-js/app'

const lastResultsResolver = resolver({
  returns: ['ID'],
  async resolve(tournament) {
    return ['1', '2', '3', '4', '5']
  }
})

export default lastResultsResolver

