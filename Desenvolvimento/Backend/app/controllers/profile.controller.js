const profileModel = require('../models/profile.model')

module.exports = {
  getAll: async () => {
    const profiles = await profileModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (profiles.length > 0) return profiles
    else return []
  },
  get: async id => {
    return 'not implemented yet'
  },
  set: async data => {
    return 'not implemented yet'
  },
  update: async (id, data) => {
    return 'not implemented yet'
  }
}
