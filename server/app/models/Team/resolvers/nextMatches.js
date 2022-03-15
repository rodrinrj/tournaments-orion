import { resolver } from '@orion-js/app'
import Match from 'app/models/Match'
import Matches from 'app/collections/Matches'

const nextMatchesResolver = resolver({
  returns: [Match],
  async resolve(team, params, viewer) {
    const result = await Matches.aggregate([
      {
        $match: {
          $or: [{ home: team._id }, { visit: team._id }]
        }
      },
      { $sort: { date: -1 } },
      { $limit: 5 },
    ]).toArray()
    return result
  }
})

export default nextMatchesResolver

