const childHistoryController = require('../controllers/childHistory.controller')
module.exports = {
  getAll: async () => {
    let res = await childHistoryController.getAll()
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
