import { job } from '@orion-js/jobs'

const notifyNextMatchesJob = job({
  type: 'event',
  async run({ invitation }) {
    console.log("logging invitation")
    console.log(`${invitation._id}`)
  }
})

export default notifyNextMatchesJob

