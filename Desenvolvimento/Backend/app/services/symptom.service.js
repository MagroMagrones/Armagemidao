const symptomController = require('../controllers/symptom.controller')
module.exports = {
  getAll: async () => {
    let res = await symptomController.getAll()
    return res
  },
  get: async data => {
    return 'not implemented yet'
  },
  set: async data => {
    return 'not implemented yet'
  },
  update: async data => {
    return 'not implemented yet'
  }
}
