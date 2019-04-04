userProfileModel = require('../models/userProfile.model')

module.exports = {
  getAll: async () => {
    usersProfile = await userProfileModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (usersProfile.length > 0) return usersProfile
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
