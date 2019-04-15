const boundModel = require('../models/bound.model')

module.exports = {
  getAll: async () => {
    const bounds = await boundModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (bounds.length > 0) return bounds
    else return []
  },
  get: async payload => {
    const bounds = await boundModel
      .findAll({
        where: {
          ...payload
        }
      })
      .then()
      .catch(err => console.log(err))

    if (bounds.length > 0) return bounds
    else return []
  },
  set: async data => {
    return 'not implemented yet'
  },
  update: async (id, data) => {
    return 'not implemented yet'
  }
}
