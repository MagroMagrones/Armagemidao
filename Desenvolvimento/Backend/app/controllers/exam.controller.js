const examModel = require('../models/exam.model')

module.exports = {
  getAll: async () => {
    const exams = await examModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (exams.length > 0) return exams
    else return []
  },
  get: async payload => {
    const exam = await examModel
      .findAll({
        where: {
          ...payload
        }
      })
      .then()
      .catch(err => console.log(err))

    if (exam.length > 0) return exam
    else return []
  },
  set: async data => {
    return 'not implemented yet'
  },
  update: async (id, data) => {
    return 'not implemented yet'
  }
}
