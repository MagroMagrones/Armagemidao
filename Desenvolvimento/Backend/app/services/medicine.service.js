const medicineController = require('../controllers/medicine.controller')
module.exports = {
  getAll: async () => {
    let res = await medicineController.getAll()
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
