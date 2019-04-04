examModel = require('../models/exam.model')

module.exports = {
  getAll: async () => {
    exams = await examModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (exams.length > 0) return exams
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
