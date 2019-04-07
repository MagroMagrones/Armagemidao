const medicineDoseModel = require('../models/medicineDose.model')

module.exports = {
  getAll: async () => {
    const medicineDoses = await medicineDoseModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (medicineDoses.length > 0) return medicineDoses
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
