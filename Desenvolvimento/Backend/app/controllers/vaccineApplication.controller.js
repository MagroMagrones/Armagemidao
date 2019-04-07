const vaccineApplication = require('../models/vaccineApplication.model')

module.exports = {
  getAll: async () => {
    const vaccineApplications = await vaccineApplication
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (vaccineApplications.length > 0) return vaccineApplications
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
