vaccineModel = require('../models/vaccine.model')

module.exports = {
  getAll: async () => {
    vaccine = await userModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (vaccine.length > 0) return vaccine
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
