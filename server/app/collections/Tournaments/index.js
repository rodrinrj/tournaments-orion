import { Collection } from '@orion-js/app'
import Tournament from 'app/models/Tournament'

const TournamentsCollection = new Collection({
  name: 'tournaments',
  model: Tournament,
  indexes: []
})

export default TournamentsCollection

