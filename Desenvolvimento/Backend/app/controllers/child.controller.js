childModel = require('../models/child.model')

module.exports = {
  getAll: async () => {
    children = await childModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (children.length > 0) return children
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
