const childHistoryModel = require('../models/childHistory.model')

module.exports = {
  getAll: async () => {
    const childHistorys = await childHistoryModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (childHistorys.length > 0) return childHistorys
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
