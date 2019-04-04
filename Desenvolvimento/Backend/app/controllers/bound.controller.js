boundModel = require('../models/bound.model')

module.exports = {
  getAll: async () => {
    bounds = await boundModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (bounds.length > 0) return bounds
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
