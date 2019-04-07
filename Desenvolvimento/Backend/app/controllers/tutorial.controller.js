const tutorialModel = require('../models/tutorial.model')

module.exports = {
  getAll: async () => {
    const tutorials = await tutorialModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (tutorials.length > 0) return tutorials
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
