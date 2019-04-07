const medicineModel = require('../models/medicine.model')

module.exports = {
  getAll: async () => {
    const medicines = await medicineModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (medicines.length > 0) return medicines
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
