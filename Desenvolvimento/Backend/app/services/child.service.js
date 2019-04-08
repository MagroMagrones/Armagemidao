const childController = require('../controllers/child.controller')
module.exports = {
  getAll: async () => {
    let res = await childController.getAll()
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
