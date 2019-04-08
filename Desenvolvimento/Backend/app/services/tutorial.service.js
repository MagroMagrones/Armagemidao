const tutorialController = require('../controllers/tutorial.controller')
module.exports = {
  getAll: async () => {
    let res = await tutorialController.getAll()
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
