const boundPermissionModel = require('../models/boundPermission.model')

module.exports = {
  getAll: async () => {
    const boundPermissions = await boundPermissionModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (boundPermissions.length > 0) return boundPermissions
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
