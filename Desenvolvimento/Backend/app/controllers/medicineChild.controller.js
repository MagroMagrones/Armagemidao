const medicineChildModel = require('../models/medicineChild.model')

module.exports = {
  getAll: async () => {
    const medicineChild = await medicineChildModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (medicineChild.length > 0) return medicineChild
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
