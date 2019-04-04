permissionModel = require('../models/permission.model')

module.exports = {
  getAll: async () => {
    permissions = await permissionModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (permissions.length > 0) return permissions
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
