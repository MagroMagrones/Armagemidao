tutorialAccessModel = require('../models/tutorialAccess.model')

module.exports = {
  getAll: async () => {
    tutorialAccesses = await tutorialAccessModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (tutorialAccesses.length > 0) return tutorialAccesses
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
