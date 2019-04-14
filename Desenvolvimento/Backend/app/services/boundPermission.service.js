const boundPermissionController = require('../controllers/boundPermission.controller')
module.exports = {
  getAll: async () => {
    let res = await boundPermissionController.getAll()
    return res
  },
  get: async data => {
    return 'not implemented yet'
  },
  set: async data => {
    return 'not implemented yet'
  },
  update: async data => {
    return 'not implemented yet'
  }
}
