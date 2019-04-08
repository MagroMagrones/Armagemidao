const permissionController = require('../controllers/permission.controller')
module.exports = {
  getAll: async () => {
    let res = await permissionController.getAll()
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
