const vaccineController = require('../controllers/vaccine.controller')
module.exports = {
  getAll: async () => {
    let res = await vaccineController.getAll()
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
  },
  delete: async data => {
    if (!data.id) return { err: 'id required' }
    let res = await vaccineController.delete(data)
    return res
  }
}
