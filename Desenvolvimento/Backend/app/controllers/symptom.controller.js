symptomModel = require('../models/symptom.model')

module.exports = {
  getAll: async () => {
    symptoms = await symptomModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (symptoms.length > 0) return symptoms
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
