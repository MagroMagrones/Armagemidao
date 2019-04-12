const medicineChildController = require('../controllers/medicineChild.controller')

module.exports = {
  getAll: async () => {
    let res = await medicineChildController.getAll()
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
