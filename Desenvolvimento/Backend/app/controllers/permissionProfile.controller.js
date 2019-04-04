permissionProfileModel = require('../models/permissionProfile.model')

module.exports = {
  getAll: async () => {
    permissionProfiles = await permissionProfileModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (permissionProfiles.length > 0) return permissionProfiles
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
