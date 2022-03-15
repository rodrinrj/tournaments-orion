import { Collection } from '@orion-js/app'
import Team from 'app/models/Team'

const TeamsCollection = new Collection({
  name: 'teams',
  model: Team,
  indexes: []
})

export default TeamsCollection

